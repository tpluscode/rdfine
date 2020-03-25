import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface HardwareStore extends Schema.Store, RdfResource {
}

export default function HardwareStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HardwareStoreClass extends StoreMixin(Resource) implements HardwareStore {
  }
  return HardwareStoreClass
}

class HardwareStoreImpl extends HardwareStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<HardwareStore>) {
    super(arg)
    this.types.add(schema.HardwareStore)
    initializeProperties<HardwareStore>(this, init)
  }
}
HardwareStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HardwareStore)
HardwareStoreMixin.Class = HardwareStoreImpl
