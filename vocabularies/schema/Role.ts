import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface Role extends Schema.Intangible, RdfResource {
  endDate: Date | Date;
  namedPosition: string | string;
  roleName: string | string;
  startDate: Date | Date;
}

export default function RoleMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RoleClass extends IntangibleMixin(Resource) implements Role {
    @property.literal()
    endDate!: Date | Date;
    @property.literal()
    namedPosition!: string | string;
    @property.literal()
    roleName!: string | string;
    @property.literal()
    startDate!: Date | Date;
  }
  return RoleClass
}

class RoleImpl extends RoleMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Role)
  }
}
RoleMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Role)
RoleMixin.Class = RoleImpl
