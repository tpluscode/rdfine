import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { FurnitureStoreMixin } from '../FurnitureStore';

export const FurnitureStoreDependencies = [
  StoreMixin as Mixin,
  FurnitureStoreMixin as Mixin];
