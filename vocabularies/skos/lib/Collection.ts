import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { skos } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Skos from '..';

export interface Collection<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  member: Array<Skos.Collection<D> | Skos.Concept<D>>;
}

export function CollectionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Collection> & RdfResourceCore> & Base {
  @namespace(skos)
  class CollectionClass extends Resource implements Partial<Collection> {
    @property.resource({ values: 'array' })
    member!: Array<Skos.Collection | Skos.Concept>;
  }
  return CollectionClass
}

class CollectionImpl extends CollectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Collection>) {
    super(arg, init)
    this.types.add(skos.Collection)
  }

  static readonly __mixins: Mixin[] = [CollectionMixin];
}
CollectionMixin.appliesTo = skos.Collection
CollectionMixin.Class = CollectionImpl

export const fromPointer = createFactory<Collection>([CollectionMixin], { types: [skos.Collection] });
