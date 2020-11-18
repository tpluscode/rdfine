import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TradeActionMixin } from '../lib/TradeAction';
import { PreOrderActionMixin } from '../lib/PreOrderAction';

export const PreOrderActionBundle = [
  TradeActionMixin as Mixin,
  PreOrderActionMixin as Mixin];
