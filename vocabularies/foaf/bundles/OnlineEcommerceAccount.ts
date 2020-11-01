import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OnlineAccountMixin } from '../OnlineAccount';
import { OnlineEcommerceAccountMixin } from '../OnlineEcommerceAccount';

export const OnlineEcommerceAccountBundle = [
  OnlineAccountMixin as Mixin,
  OnlineEcommerceAccountMixin as Mixin];
