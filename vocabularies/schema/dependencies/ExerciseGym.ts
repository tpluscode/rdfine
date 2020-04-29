import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsActivityLocationMixin } from '../SportsActivityLocation';
import { ExerciseGymMixin } from '../ExerciseGym';

export const ExerciseGymDependencies = [
  SportsActivityLocationMixin as Mixin,
  ExerciseGymMixin as Mixin];
