import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OnlineAccountMixin } from '../lib/OnlineAccount';
import { OnlineChatAccountMixin } from '../lib/OnlineChatAccount';

export const OnlineChatAccountBundle = [
  OnlineAccountMixin as Mixin,
  OnlineChatAccountMixin as Mixin];
