import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodServiceMixin } from '../lib/FoodService';
import { ServiceMixin } from '../lib/Service';

export const FoodServiceBundle = [
  FoodServiceMixin as Mixin,
  ServiceMixin as Mixin];
