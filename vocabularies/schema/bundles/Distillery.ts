import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { FoodEstablishmentMixin } from '../FoodEstablishment';
import { DistilleryMixin } from '../Distillery';

export const DistilleryBundle = [
  FoodEstablishmentMixin as Mixin,
  DistilleryMixin as Mixin];
