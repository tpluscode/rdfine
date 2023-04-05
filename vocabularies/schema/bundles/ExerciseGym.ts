import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { ExerciseGymMixin } from '../lib/ExerciseGym';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';

export const ExerciseGymBundle = [
  ExerciseGymMixin as Mixin,
  SportsActivityLocationMixin as Mixin];
