import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../lib/Service';
import { FoodServiceMixin } from '../lib/FoodService';

export const FoodServiceBundle = [
  ServiceMixin as Mixin,
  FoodServiceMixin as Mixin];
