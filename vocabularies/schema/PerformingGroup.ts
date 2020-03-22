import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.PerformingGroup)
  }
}
PerformingGroupMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PerformingGroup)
PerformingGroupMixin.Class = PerformingGroupImpl
