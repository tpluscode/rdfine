import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Collection<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  collectionSize: number | undefined;
}

export function CollectionMixin<Base extends Constructor>(Resource: Base): Constructor<Collection> & Base {
  @namespace(schema)
  class CollectionClass extends CreativeWorkMixin(Resource) implements Partial<Collection> {
    @property.literal({ type: Number })
    collectionSize: number | undefined;
  }
  return CollectionClass
}

class CollectionImpl extends CollectionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Collection>) {
    super(arg, init)
    this.types.add(schema.Collection)
  }

  static readonly __mixins: Mixin[] = [CollectionMixin, CreativeWorkMixin];
}
CollectionMixin.appliesTo = schema.Collection
CollectionMixin.Class = CollectionImpl
