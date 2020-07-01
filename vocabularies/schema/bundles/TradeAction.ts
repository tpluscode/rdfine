import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ActionMixin } from '../Action';
import { TradeActionMixin } from '../TradeAction';
import { PriceSpecificationMixin } from '../PriceSpecification';

export const TradeActionBundle = [
  ActionMixin as Mixin,
  TradeActionMixin as Mixin,
  PriceSpecificationMixin as Mixin];
