import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { ConvenienceStoreMixin } from '../ConvenienceStore';

export const ConvenienceStoreDependencies = [
  StoreMixin as Mixin,
  ConvenienceStoreMixin as Mixin];
