import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TradeActionMixin } from '../TradeAction';
import { OrderActionMixin } from '../OrderAction';

export const OrderActionDependencies = [
  TradeActionMixin as Mixin,
  OrderActionMixin as Mixin];
