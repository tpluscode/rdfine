import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../lib/Action';
import { TradeActionMixin } from '../lib/TradeAction';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';

export const TradeActionBundle = [
  ActionMixin as Mixin,
  TradeActionMixin as Mixin,
  PriceSpecificationMixin as Mixin];
