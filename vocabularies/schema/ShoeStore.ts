import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface ShoeStore extends Schema.Store, RdfResource {
}

export default function ShoeStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ShoeStoreClass extends StoreMixin(Resource) implements ShoeStore {
  }
  return ShoeStoreClass
}

class ShoeStoreImpl extends ShoeStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ShoeStore>) {
    super(arg, init)
    this.types.add(schema.ShoeStore)
  }
}
ShoeStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ShoeStore)
ShoeStoreMixin.Class = ShoeStoreImpl
