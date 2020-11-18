import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';
import { BakeryMixin } from '../lib/Bakery';

export const BakeryBundle = [
  FoodEstablishmentMixin as Mixin,
  BakeryMixin as Mixin];
