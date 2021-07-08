import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationRoleMixin } from '../lib/OrganizationRole';
import { EmployeeRoleMixin } from '../lib/EmployeeRole';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';

export const EmployeeRoleBundle = [
  OrganizationRoleMixin as Mixin,
  EmployeeRoleMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  MonetaryAmountMixin as Mixin];
