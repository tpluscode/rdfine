import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';
import { ExerciseGymMixin } from '../lib/ExerciseGym';

export const ExerciseGymBundle = [
  SportsActivityLocationMixin as Mixin,
  ExerciseGymMixin as Mixin];
