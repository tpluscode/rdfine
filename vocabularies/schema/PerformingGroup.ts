import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import OrganizationMixin from './Organization';

export interface PerformingGroup extends Schema.Organization, RdfResource {
}

export default function PerformingGroupMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PerformingGroupClass extends OrganizationMixin(Resource) implements PerformingGroup {
  }
  return PerformingGroupClass
}

class PerformingGroupImpl extends PerformingGroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<PerformingGroup>) {
    super(arg)
    this.types.add(schema.PerformingGroup)
    initializeProperties(this, init)
  }
}
PerformingGroupMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PerformingGroup)
PerformingGroupMixin.Class = PerformingGroupImpl
