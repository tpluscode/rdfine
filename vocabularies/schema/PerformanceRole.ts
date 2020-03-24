import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import RoleMixin from './Role';

export interface PerformanceRole extends Schema.Role, RdfResource {
  characterName: string;
}

export default function PerformanceRoleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PerformanceRoleClass extends RoleMixin(Resource) implements PerformanceRole {
    @property.literal()
    characterName!: string;
  }
  return PerformanceRoleClass
}

class PerformanceRoleImpl extends PerformanceRoleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<PerformanceRole>) {
    super(arg)
    this.types.add(schema.PerformanceRole)
    initializeProperties(this, init)
  }
}
PerformanceRoleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PerformanceRole)
PerformanceRoleMixin.Class = PerformanceRoleImpl
