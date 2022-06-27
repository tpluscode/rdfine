import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FastFoodRestaurantMixin } from '../lib/FastFoodRestaurant';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';

export const FastFoodRestaurantBundle = [
  FastFoodRestaurantMixin as Mixin,
  FoodEstablishmentMixin as Mixin];
