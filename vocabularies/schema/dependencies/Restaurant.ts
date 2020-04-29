import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../FoodEstablishment';
import { RestaurantMixin } from '../Restaurant';

export const RestaurantDependencies = [
  FoodEstablishmentMixin as Mixin,
  RestaurantMixin as Mixin];
