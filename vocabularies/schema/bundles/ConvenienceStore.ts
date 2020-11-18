import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../lib/Store';
import { ConvenienceStoreMixin } from '../lib/ConvenienceStore';

export const ConvenienceStoreBundle = [
  StoreMixin as Mixin,
  ConvenienceStoreMixin as Mixin];
