import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { TradeActionMixin } from '../TradeAction';
import { BuyActionMixin } from '../BuyAction';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { WarrantyPromiseMixin } from '../WarrantyPromise';

export const BuyActionDependencies = [
  TradeActionMixin as Mixin,
  BuyActionMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  WarrantyPromiseMixin as Mixin];
