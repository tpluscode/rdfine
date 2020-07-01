import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../FoodEstablishment';
import { BakeryMixin } from '../Bakery';

export const BakeryBundle = [
  FoodEstablishmentMixin as Mixin,
  BakeryMixin as Mixin];
