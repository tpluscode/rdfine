import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TradeActionMixin } from '../TradeAction';
import { PreOrderActionMixin } from '../PreOrderAction';

export const PreOrderActionBundle = [
  TradeActionMixin as Mixin,
  PreOrderActionMixin as Mixin];
