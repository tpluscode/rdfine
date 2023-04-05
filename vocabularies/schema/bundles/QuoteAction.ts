import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { QuoteActionMixin } from '../lib/QuoteAction';
import { TradeActionMixin } from '../lib/TradeAction';

export const QuoteActionBundle = [
  QuoteActionMixin as Mixin,
  TradeActionMixin as Mixin];
