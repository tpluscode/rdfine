import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
    @property.literal({ path: schema.baseSalary, type: Number })
    baseSalaryLiteral!: number;
    @property.literal()
    salaryCurrency!: string;
  }
  return EmployeeRoleClass
}

class EmployeeRoleImpl extends EmployeeRoleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EmployeeRole>) {
    super(arg, init)
    this.types.add(schema.EmployeeRole)
  }
}
EmployeeRoleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EmployeeRole)
EmployeeRoleMixin.Class = EmployeeRoleImpl
