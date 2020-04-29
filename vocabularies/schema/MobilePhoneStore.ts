import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { StoreMixin } from './Store';

export interface MobilePhoneStore extends Schema.Store, RdfResource {
}

export function MobilePhoneStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MobilePhoneStoreClass extends StoreMixin(Resource) implements MobilePhoneStore {
  }
  return MobilePhoneStoreClass
}

class MobilePhoneStoreImpl extends MobilePhoneStoreMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MobilePhoneStore>) {
    super(arg, init)
    this.types.add(schema.MobilePhoneStore)
  }
}
MobilePhoneStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MobilePhoneStore)
MobilePhoneStoreMixin.Class = MobilePhoneStoreImpl
