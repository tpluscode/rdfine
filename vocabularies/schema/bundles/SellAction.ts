import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TradeActionMixin } from '../lib/TradeAction';
import { SellActionMixin } from '../lib/SellAction';
import { PersonMixin } from '../lib/Person';
import { WarrantyPromiseMixin } from '../lib/WarrantyPromise';

export const SellActionBundle = [
  TradeActionMixin as Mixin,
  SellActionMixin as Mixin,
  PersonMixin as Mixin,
  WarrantyPromiseMixin as Mixin];
