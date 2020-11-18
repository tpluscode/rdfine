import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';
import { FastFoodRestaurantMixin } from '../lib/FastFoodRestaurant';

export const FastFoodRestaurantBundle = [
  FoodEstablishmentMixin as Mixin,
  FastFoodRestaurantMixin as Mixin];
