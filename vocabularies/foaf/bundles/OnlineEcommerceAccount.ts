import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OnlineAccountMixin } from '../lib/OnlineAccount';
import { OnlineEcommerceAccountMixin } from '../lib/OnlineEcommerceAccount';

export const OnlineEcommerceAccountBundle = [
  OnlineAccountMixin as Mixin,
  OnlineEcommerceAccountMixin as Mixin];
