import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { StoreMixin } from './Store';

export interface GroceryStore<ID extends ResourceNode = ResourceNode> extends Schema.Store<ID>, RdfResource<ID> {
}

export function GroceryStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GroceryStoreClass extends StoreMixin(Resource) implements GroceryStore {
  }
  return GroceryStoreClass
}

class GroceryStoreImpl extends GroceryStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GroceryStore>) {
    super(arg, init)
    this.types.add(schema.GroceryStore)
  }

  static readonly __mixins: Mixin[] = [GroceryStoreMixin, StoreMixin];
}
GroceryStoreMixin.appliesTo = schema.GroceryStore
GroceryStoreMixin.Class = GroceryStoreImpl
