import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface ToyStore extends Schema.Store, RdfResource {
}

export default function ToyStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ToyStoreClass extends StoreMixin(Resource) implements ToyStore {
  }
  return ToyStoreClass
}

class ToyStoreImpl extends ToyStoreMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ToyStore)
  }
}
ToyStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ToyStore)
ToyStoreMixin.Class = ToyStoreImpl
