import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { StoreMixin } from './Store';

export interface ClothingStore extends Schema.Store, RdfResource {
}

export function ClothingStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ClothingStoreClass extends StoreMixin(Resource) implements ClothingStore {
  }
  return ClothingStoreClass
}

class ClothingStoreImpl extends ClothingStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ClothingStore>) {
    super(arg, init)
    this.types.add(schema.ClothingStore)
  }

  static readonly __mixins: Mixin[] = [ClothingStoreMixin, StoreMixin];
}
ClothingStoreMixin.appliesTo = schema.ClothingStore
ClothingStoreMixin.Class = ClothingStoreImpl
