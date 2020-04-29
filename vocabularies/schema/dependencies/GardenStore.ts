import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { GardenStoreMixin } from '../GardenStore';

export const GardenStoreDependencies = [
  StoreMixin as Mixin,
  GardenStoreMixin as Mixin];
