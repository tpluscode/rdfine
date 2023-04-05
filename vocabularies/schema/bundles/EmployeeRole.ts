import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EmployeeRoleMixin } from '../lib/EmployeeRole';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { OrganizationRoleMixin } from '../lib/OrganizationRole';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';

export const EmployeeRoleBundle = [
  EmployeeRoleMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  OrganizationRoleMixin as Mixin,
  PriceSpecificationMixin as Mixin];
