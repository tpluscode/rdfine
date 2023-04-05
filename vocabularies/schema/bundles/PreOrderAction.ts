import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PreOrderActionMixin } from '../lib/PreOrderAction';
import { TradeActionMixin } from '../lib/TradeAction';

export const PreOrderActionBundle = [
  PreOrderActionMixin as Mixin,
  TradeActionMixin as Mixin];
