import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface LiquorStore extends Schema.Store, RdfResource {
}

export default function LiquorStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LiquorStoreClass extends StoreMixin(Resource) implements LiquorStore {
  }
  return LiquorStoreClass
}

class LiquorStoreImpl extends LiquorStoreMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.LiquorStore)
  }
}
LiquorStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LiquorStore)
LiquorStoreMixin.Class = LiquorStoreImpl
