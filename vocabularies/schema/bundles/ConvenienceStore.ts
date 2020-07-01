import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { ConvenienceStoreMixin } from '../ConvenienceStore';

export const ConvenienceStoreBundle = [
  StoreMixin as Mixin,
  ConvenienceStoreMixin as Mixin];
