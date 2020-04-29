import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { MensClothingStoreMixin } from '../MensClothingStore';

export const MensClothingStoreDependencies = [
  StoreMixin as Mixin,
  MensClothingStoreMixin as Mixin];
