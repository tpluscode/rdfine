import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationRoleMixin } from '../lib/OrganizationRole';
import { EmployeeRoleMixin } from '../lib/EmployeeRole';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';

export const EmployeeRoleBundle = [
  OrganizationRoleMixin as Mixin,
  EmployeeRoleMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  PriceSpecificationMixin as Mixin];
