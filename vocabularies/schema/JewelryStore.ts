import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface JewelryStore extends Schema.Store, RdfResource {
}

export default function JewelryStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class JewelryStoreClass extends StoreMixin(Resource) implements JewelryStore {
  }
  return JewelryStoreClass
}

class JewelryStoreImpl extends JewelryStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<JewelryStore>) {
    super(arg)
    this.types.add(schema.JewelryStore)
    initializeProperties<JewelryStore>(this, init)
  }
}
JewelryStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.JewelryStore)
JewelryStoreMixin.Class = JewelryStoreImpl
