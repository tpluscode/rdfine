import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.HardwareStore)
  }
}
HardwareStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HardwareStore)
HardwareStoreMixin.Class = HardwareStoreImpl
