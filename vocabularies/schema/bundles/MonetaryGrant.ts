import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GrantMixin } from '../Grant';
import { MonetaryGrantMixin } from '../MonetaryGrant';
import { MonetaryAmountMixin } from '../MonetaryAmount';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';

export const MonetaryGrantBundle = [
  GrantMixin as Mixin,
  MonetaryGrantMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
