import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import OrganizationRoleMixin from './OrganizationRole';

export interface EmployeeRole extends Schema.OrganizationRole, RdfResource {
  baseSalary: Schema.MonetaryAmount | Schema.PriceSpecification;
  baseSalaryLiteral: number;
  salaryCurrency: string;
}

export default function EmployeeRoleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EmployeeRoleClass extends OrganizationRoleMixin(Resource) implements EmployeeRole {
    @property.resource()
    baseSalary!: Schema.MonetaryAmount | Schema.PriceSpecification;
    @property.literal({ type: Number, path: schema.baseSalary })
    baseSalaryLiteral!: number;
    @property.literal()
    salaryCurrency!: string;
  }
  return EmployeeRoleClass
}

class EmployeeRoleImpl extends EmployeeRoleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<EmployeeRole>) {
    super(arg)
    this.types.add(schema.EmployeeRole)
    initializeProperties(this, init)
  }
}
EmployeeRoleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EmployeeRole)
EmployeeRoleMixin.Class = EmployeeRoleImpl
