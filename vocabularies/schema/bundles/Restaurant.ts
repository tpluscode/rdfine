import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../FoodEstablishment';
import { RestaurantMixin } from '../Restaurant';

export const RestaurantBundle = [
  FoodEstablishmentMixin as Mixin,
  RestaurantMixin as Mixin];
