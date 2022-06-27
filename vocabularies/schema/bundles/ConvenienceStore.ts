import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ConvenienceStoreMixin } from '../lib/ConvenienceStore';
import { StoreMixin } from '../lib/Store';

export const ConvenienceStoreBundle = [
  ConvenienceStoreMixin as Mixin,
  StoreMixin as Mixin];
