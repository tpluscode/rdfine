import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.EmployeeRole)
  }
}
EmployeeRoleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EmployeeRole)
EmployeeRoleMixin.Class = EmployeeRoleImpl
