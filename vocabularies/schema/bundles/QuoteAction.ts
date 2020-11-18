import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TradeActionMixin } from '../lib/TradeAction';
import { QuoteActionMixin } from '../lib/QuoteAction';

export const QuoteActionBundle = [
  TradeActionMixin as Mixin,
  QuoteActionMixin as Mixin];
