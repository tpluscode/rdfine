import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';
import { DistilleryMixin } from '../lib/Distillery';

export const DistilleryBundle = [
  FoodEstablishmentMixin as Mixin,
  DistilleryMixin as Mixin];
