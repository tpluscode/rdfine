import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { SellActionMixin } from '../lib/SellAction';
import { TradeActionMixin } from '../lib/TradeAction';
import { WarrantyPromiseMixin } from '../lib/WarrantyPromise';

export const SellActionBundle = [
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  SellActionMixin as Mixin,
  TradeActionMixin as Mixin,
  WarrantyPromiseMixin as Mixin];
