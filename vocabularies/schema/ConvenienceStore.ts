import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface ConvenienceStore extends Schema.Store, RdfResource {
}

export default function ConvenienceStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ConvenienceStoreClass extends StoreMixin(Resource) implements ConvenienceStore {
  }
  return ConvenienceStoreClass
}

class ConvenienceStoreImpl extends ConvenienceStoreMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ConvenienceStore)
  }
}
ConvenienceStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ConvenienceStore)
ConvenienceStoreMixin.Class = ConvenienceStoreImpl
