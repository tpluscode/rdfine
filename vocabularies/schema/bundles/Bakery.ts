import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { BakeryMixin } from '../lib/Bakery';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';

export const BakeryBundle = [
  BakeryMixin as Mixin,
  FoodEstablishmentMixin as Mixin];
