import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DistilleryMixin } from '../lib/Distillery';
import { FoodEstablishmentMixin } from '../lib/FoodEstablishment';

export const DistilleryBundle = [
  DistilleryMixin as Mixin,
  FoodEstablishmentMixin as Mixin];
