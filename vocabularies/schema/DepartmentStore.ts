import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<DepartmentStore>) {
    super(arg)
    this.types.add(schema.DepartmentStore)
    initializeProperties<DepartmentStore>(this, init)
  }
}
DepartmentStoreMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DepartmentStore)
DepartmentStoreMixin.Class = DepartmentStoreImpl
