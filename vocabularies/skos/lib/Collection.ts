import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { skos } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Skos from '../index.js';

export interface Collection<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  member: Array<Skos.Collection<D> | Skos.Concept<D>>;
}

export function CollectionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Collection & RdfResourceCore> & Base {
  @rdfine.namespace(skos)
  class CollectionClass extends Resource {
    @rdfine.property.resource({ values: 'array' })
    member!: Array<Skos.Collection | Skos.Concept>;
  }
  return CollectionClass as any
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
