import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GrantMixin } from '../lib/Grant';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { MonetaryGrantMixin } from '../lib/MonetaryGrant';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const MonetaryGrantBundle = [
  GrantMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  MonetaryGrantMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
