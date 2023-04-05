import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BreweryMixin } from '../lib/Brewery';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';

export const BreweryBundle = [
  BreweryMixin as Mixin,
  FoodEstablishmentMixin as Mixin];
