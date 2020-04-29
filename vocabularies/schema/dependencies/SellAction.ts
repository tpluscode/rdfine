import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TradeActionMixin } from '../TradeAction';
import { SellActionMixin } from '../SellAction';
import { PersonMixin } from '../Person';
import { WarrantyPromiseMixin } from '../WarrantyPromise';

export const SellActionDependencies = [
  TradeActionMixin as Mixin,
  SellActionMixin as Mixin,
  PersonMixin as Mixin,
  WarrantyPromiseMixin as Mixin];
