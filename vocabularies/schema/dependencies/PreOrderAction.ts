import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TradeActionMixin } from '../TradeAction';
import { PreOrderActionMixin } from '../PreOrderAction';

export const PreOrderActionDependencies = [
  TradeActionMixin as Mixin,
  PreOrderActionMixin as Mixin];
