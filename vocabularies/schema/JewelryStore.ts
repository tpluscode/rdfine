import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.JewelryStore)
  }
}
JewelryStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.JewelryStore)
JewelryStoreMixin.Class = JewelryStoreImpl
