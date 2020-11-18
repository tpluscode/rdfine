import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { GrantMixin } from '../lib/Grant';
import { MonetaryGrantMixin } from '../lib/MonetaryGrant';
import { MonetaryAmountMixin } from '../lib/MonetaryAmount';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';

export const MonetaryGrantBundle = [
  GrantMixin as Mixin,
  MonetaryGrantMixin as Mixin,
  MonetaryAmountMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
