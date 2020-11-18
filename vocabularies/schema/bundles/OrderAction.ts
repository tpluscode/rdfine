import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TradeActionMixin } from '../lib/TradeAction';
import { OrderActionMixin } from '../lib/OrderAction';

export const OrderActionBundle = [
  TradeActionMixin as Mixin,
  OrderActionMixin as Mixin];
