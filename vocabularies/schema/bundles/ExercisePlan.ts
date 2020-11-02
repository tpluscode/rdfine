import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { CreativeWorkMixin } from '../CreativeWork';
import { PhysicalActivityMixin } from '../PhysicalActivity';
import { ExercisePlanMixin } from '../ExercisePlan';
import { DurationMixin } from '../Duration';
import { QuantitativeValueMixin } from '../QuantitativeValue';
import { EnergyMixin } from '../Energy';

export const ExercisePlanBundle = [
  CreativeWorkMixin as Mixin,
  PhysicalActivityMixin as Mixin,
  ExercisePlanMixin as Mixin,
  DurationMixin as Mixin,
  QuantitativeValueMixin as Mixin,
  EnergyMixin as Mixin];
