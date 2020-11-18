import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OnlineAccountMixin } from '../lib/OnlineAccount';
import { OnlineGamingAccountMixin } from '../lib/OnlineGamingAccount';

export const OnlineGamingAccountBundle = [
  OnlineAccountMixin as Mixin,
  OnlineGamingAccountMixin as Mixin];
