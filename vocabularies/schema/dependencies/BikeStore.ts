import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { StoreMixin } from '../Store';
import { BikeStoreMixin } from '../BikeStore';

export const BikeStoreDependencies = [
  StoreMixin as Mixin,
  BikeStoreMixin as Mixin];
