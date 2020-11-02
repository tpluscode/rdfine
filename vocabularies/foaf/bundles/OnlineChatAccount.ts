import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { OnlineAccountMixin } from '../OnlineAccount';
import { OnlineChatAccountMixin } from '../OnlineChatAccount';

export const OnlineChatAccountBundle = [
  OnlineAccountMixin as Mixin,
  OnlineChatAccountMixin as Mixin];
