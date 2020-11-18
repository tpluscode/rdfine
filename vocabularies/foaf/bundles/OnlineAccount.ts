import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DocumentMixin } from '../lib/Document';
import { OnlineAccountMixin } from '../lib/OnlineAccount';

export const OnlineAccountBundle = [
  DocumentMixin as Mixin,
  OnlineAccountMixin as Mixin];
