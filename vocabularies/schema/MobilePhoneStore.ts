import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.MobilePhoneStore)
  }
}
MobilePhoneStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MobilePhoneStore)
MobilePhoneStoreMixin.Class = MobilePhoneStoreImpl
