import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DocumentMixin } from '../Document';
import { OnlineAccountMixin } from '../OnlineAccount';

export const OnlineAccountBundle = [
  DocumentMixin as Mixin,
  OnlineAccountMixin as Mixin];
