import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TradeActionMixin } from '../TradeAction';
import { QuoteActionMixin } from '../QuoteAction';

export const QuoteActionDependencies = [
  TradeActionMixin as Mixin,
  QuoteActionMixin as Mixin];
