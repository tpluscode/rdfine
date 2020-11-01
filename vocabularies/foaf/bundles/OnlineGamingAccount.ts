import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OnlineAccountMixin } from '../OnlineAccount';
import { OnlineGamingAccountMixin } from '../OnlineGamingAccount';

export const OnlineGamingAccountBundle = [
  OnlineAccountMixin as Mixin,
  OnlineGamingAccountMixin as Mixin];
