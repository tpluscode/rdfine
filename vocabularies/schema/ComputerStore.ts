import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface ComputerStore extends Schema.Store, RdfResource {
}

export default function ComputerStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ComputerStoreClass extends StoreMixin(Resource) implements ComputerStore {
  }
  return ComputerStoreClass
}

class ComputerStoreImpl extends ComputerStoreMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ComputerStore)
  }
}
ComputerStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ComputerStore)
ComputerStoreMixin.Class = ComputerStoreImpl
