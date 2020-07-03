import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../Service';
import { FoodServiceMixin } from '../FoodService';

export const FoodServiceBundle = [
  ServiceMixin as Mixin,
  FoodServiceMixin as Mixin];
