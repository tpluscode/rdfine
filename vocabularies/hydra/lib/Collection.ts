import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { hydra } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Hydra from '..';
import { ResourceMixin } from './Resource';

export interface Collection<M extends RdfResourceCore<any> = RdfResourceCore<any>, D extends RDF.DatasetCore = RDF.DatasetCore> extends Hydra.Resource<D>, RdfResource<D> {
  manages: Array<Hydra.ManagesBlock<D>>;
  member: Array<Hydra.Resource<D> & M>;
  totalItems: number | undefined;
}

export function CollectionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Collection> & RdfResourceCore> & Base {
  @namespace(hydra)
  class CollectionClass extends ResourceMixin(Resource) implements Partial<Collection> {
    @property.resource({ values: 'array', implicitTypes: [hydra.ManagesBlock] })
    manages!: Array<Hydra.ManagesBlock>;
    @property.resource({ values: 'array', implicitTypes: [hydra.Resource] })
    member!: Array<Hydra.Resource>;
    @property.literal({ type: Number })
    totalItems: number | undefined;
  }
  return CollectionClass
}

class CollectionImpl extends CollectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Collection>) {
    super(arg, init)
    this.types.add(hydra.Collection)
  }

  static readonly __mixins: Mixin[] = [CollectionMixin, ResourceMixin];
}
CollectionMixin.appliesTo = hydra.Collection
CollectionMixin.Class = CollectionImpl

export const fromPointer = createFactory<Collection>([ResourceMixin, CollectionMixin], { types: [hydra.Collection] });
