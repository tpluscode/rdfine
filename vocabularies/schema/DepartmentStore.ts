import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import StoreMixin from './Store';

export interface DepartmentStore extends Schema.Store, RdfResource {
}

export default function DepartmentStoreMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DepartmentStoreClass extends StoreMixin(Resource) implements DepartmentStore {
  }
  return DepartmentStoreClass
}

class DepartmentStoreImpl extends DepartmentStoreMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DepartmentStore)
  }
}
DepartmentStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DepartmentStore)
DepartmentStoreMixin.Class = DepartmentStoreImpl
