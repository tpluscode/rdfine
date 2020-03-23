import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface WholesaleStore extends Schema.Store, RdfResource {
}

export default function WholesaleStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WholesaleStoreClass extends StoreMixin(Resource) implements WholesaleStore {
  }
  return WholesaleStoreClass
}

class WholesaleStoreImpl extends WholesaleStoreMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.WholesaleStore)
  }
}
WholesaleStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WholesaleStore)
WholesaleStoreMixin.Class = WholesaleStoreImpl
