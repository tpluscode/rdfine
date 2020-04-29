import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { ShoeStoreMixin } from '../ShoeStore';

export const ShoeStoreDependencies = [
  StoreMixin as Mixin,
  ShoeStoreMixin as Mixin];
