import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { PhysicalActivityMixin } from '../lib/PhysicalActivity';
import { ExercisePlanMixin } from '../lib/ExercisePlan';
import { DurationMixin } from '../lib/Duration';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';
import { EnergyMixin } from '../lib/Energy';

export const ExercisePlanBundle = [
  CreativeWorkMixin as Mixin,
  PhysicalActivityMixin as Mixin,
  ExercisePlanMixin as Mixin,
  DurationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  EnergyMixin as Mixin];
