import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface MobilePhoneStore extends Schema.Store, RdfResource {
}

export default function MobilePhoneStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MobilePhoneStoreClass extends StoreMixin(Resource) implements MobilePhoneStore {
  }
  return MobilePhoneStoreClass
}

class MobilePhoneStoreImpl extends MobilePhoneStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<MobilePhoneStore>) {
    super(arg)
    this.types.add(schema.MobilePhoneStore)
    initializeProperties(this, init)
  }
}
MobilePhoneStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MobilePhoneStore)
MobilePhoneStoreMixin.Class = MobilePhoneStoreImpl
