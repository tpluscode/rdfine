import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BuyActionMixin } from '../lib/BuyAction';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { TradeActionMixin } from '../lib/TradeAction';
import { WarrantyPromiseMixin } from '../lib/WarrantyPromise';

export const BuyActionBundle = [
  BuyActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  TradeActionMixin as Mixin,
  WarrantyPromiseMixin as Mixin];
