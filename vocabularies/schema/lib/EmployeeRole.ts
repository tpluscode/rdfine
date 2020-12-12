import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OrganizationRoleMixin } from './OrganizationRole';

export interface EmployeeRole<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.OrganizationRole<D>, RdfResource<D> {
  baseSalary: Schema.MonetaryAmount<D> | Schema.PriceSpecification<D> | undefined;
  baseSalaryLiteral: number | undefined;
  salaryCurrency: string | undefined;
}

export function EmployeeRoleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<EmployeeRole> & RdfResourceCore> & Base {
  @namespace(schema)
  class EmployeeRoleClass extends OrganizationRoleMixin(Resource) implements Partial<EmployeeRole> {
    @property.resource()
    baseSalary: Schema.MonetaryAmount | Schema.PriceSpecification | undefined;
    @property.literal({ path: schema.baseSalary, type: Number })
    baseSalaryLiteral: number | undefined;
    @property.literal()
    salaryCurrency: string | undefined;
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

export const fromPointer = createFactory<EmployeeRole>([OrganizationRoleMixin, EmployeeRoleMixin], { types: [schema.EmployeeRole] });
