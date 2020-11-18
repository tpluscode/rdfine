import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TradeActionMixin } from '../lib/TradeAction';
import { BuyActionMixin } from '../lib/BuyAction';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { WarrantyPromiseMixin } from '../lib/WarrantyPromise';

export const BuyActionBundle = [
  TradeActionMixin as Mixin,
  BuyActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  WarrantyPromiseMixin as Mixin];
