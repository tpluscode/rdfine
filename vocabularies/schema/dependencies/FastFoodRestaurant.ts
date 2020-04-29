import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../FoodEstablishment';
import { FastFoodRestaurantMixin } from '../FastFoodRestaurant';

export const FastFoodRestaurantDependencies = [
  FoodEstablishmentMixin as Mixin,
  FastFoodRestaurantMixin as Mixin];
