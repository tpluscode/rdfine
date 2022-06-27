import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OrderActionMixin } from '../lib/OrderAction';
import { TradeActionMixin } from '../lib/TradeAction';

export const OrderActionBundle = [
  OrderActionMixin as Mixin,
  TradeActionMixin as Mixin];
