import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';
import { RestaurantMixin } from '../lib/Restaurant';

export const RestaurantBundle = [
  FoodEstablishmentMixin as Mixin,
  RestaurantMixin as Mixin];
