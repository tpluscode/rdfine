import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationRoleMixin } from '../OrganizationRole';
import { EmployeeRoleMixin } from '../EmployeeRole';
import { MonetaryAmountMixin } from '../MonetaryAmount';
import { PriceSpecificationMixin } from '../PriceSpecification';

export const EmployeeRoleBundle = [
  OrganizationRoleMixin as Mixin,
  EmployeeRoleMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  PriceSpecificationMixin as Mixin];
