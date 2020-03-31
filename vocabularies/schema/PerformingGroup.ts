import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<PerformingGroup>) {
    super(arg, init)
    this.types.add(schema.PerformingGroup)
  }
}
PerformingGroupMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PerformingGroup)
PerformingGroupMixin.Class = PerformingGroupImpl
