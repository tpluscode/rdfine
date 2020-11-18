import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlayActionMixin } from '../lib/PlayAction';
import { ExerciseActionMixin } from '../lib/ExerciseAction';
import { PlaceMixin } from '../lib/Place';
import { DietMixin } from '../lib/Diet';
import { DistanceMixin } from '../lib/Distance';
import { ExercisePlanMixin } from '../lib/ExercisePlan';
import { PersonMixin } from '../lib/Person';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';
import { SportsEventMixin } from '../lib/SportsEvent';
import { SportsTeamMixin } from '../lib/SportsTeam';

export const ExerciseActionBundle = [
  PlayActionMixin as Mixin,
  ExerciseActionMixin as Mixin,
  PlaceMixin as Mixin,
  DietMixin as Mixin,
  DistanceMixin as Mixin,
  ExercisePlanMixin as Mixin,
  PersonMixin as Mixin,
  SportsActivityLocationMixin as Mixin,
  SportsEventMixin as Mixin,
  SportsTeamMixin as Mixin];
