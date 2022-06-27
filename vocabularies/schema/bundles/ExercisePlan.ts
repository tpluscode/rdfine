import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../lib/CreativeWork';
import { DurationMixin } from '../lib/Duration';
import { EnergyMixin } from '../lib/Energy';
import { ExercisePlanMixin } from '../lib/ExercisePlan';
import { PhysicalActivityMixin } from '../lib/PhysicalActivity';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const ExercisePlanBundle = [
  CreativeWorkMixin as Mixin,
  DurationMixin as Mixin,
  EnergyMixin as Mixin,
  ExercisePlanMixin as Mixin,
  PhysicalActivityMixin as Mixin,
  QuantitativeValueMixin as Mixin];
