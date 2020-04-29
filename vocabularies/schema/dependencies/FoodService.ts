import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ServiceMixin } from '../Service';
import { FoodServiceMixin } from '../FoodService';

export const FoodServiceDependencies = [
  ServiceMixin as Mixin,
  FoodServiceMixin as Mixin];
