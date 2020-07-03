import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TradeActionMixin } from '../TradeAction';
import { QuoteActionMixin } from '../QuoteAction';

export const QuoteActionBundle = [
  TradeActionMixin as Mixin,
  QuoteActionMixin as Mixin];
