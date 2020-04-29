import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../FoodEstablishment';
import { BreweryMixin } from '../Brewery';

export const BreweryDependencies = [
  FoodEstablishmentMixin as Mixin,
  BreweryMixin as Mixin];
