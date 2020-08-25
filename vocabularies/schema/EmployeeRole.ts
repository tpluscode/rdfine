import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { OrganizationRoleMixin } from './OrganizationRole';

export interface EmployeeRole extends Schema.OrganizationRole, RdfResource {
  baseSalary: Schema.MonetaryAmount | Schema.PriceSpecification;
  baseSalaryLiteral: number;
  salaryCurrency: string;
}

export function EmployeeRoleMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [EmployeeRoleMixin, OrganizationRoleMixin];
}
EmployeeRoleMixin.appliesTo = schema.EmployeeRole
EmployeeRoleMixin.Class = EmployeeRoleImpl
