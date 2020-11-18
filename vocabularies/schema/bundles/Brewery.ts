import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';
import { BreweryMixin } from '../lib/Brewery';

export const BreweryBundle = [
  FoodEstablishmentMixin as Mixin,
  BreweryMixin as Mixin];
