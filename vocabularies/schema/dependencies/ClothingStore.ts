import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { ClothingStoreMixin } from '../ClothingStore';

export const ClothingStoreDependencies = [
  StoreMixin as Mixin,
  ClothingStoreMixin as Mixin];
