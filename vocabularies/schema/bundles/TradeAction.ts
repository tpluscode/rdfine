import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { TradeActionMixin } from '../lib/TradeAction';

export const TradeActionBundle = [
  ActionMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  TradeActionMixin as Mixin];
