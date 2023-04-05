import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { DietMixin } from '../lib/Diet';
import { DistanceMixin } from '../lib/Distance';
import { ExerciseActionMixin } from '../lib/ExerciseAction';
import { ExercisePlanMixin } from '../lib/ExercisePlan';
import { PersonMixin } from '../lib/Person';
import { PlaceMixin } from '../lib/Place';
import { PlayActionMixin } from '../lib/PlayAction';
import { SportsActivityLocationMixin } from '../lib/SportsActivityLocation';
import { SportsEventMixin } from '../lib/SportsEvent';
import { SportsTeamMixin } from '../lib/SportsTeam';

export const ExerciseActionBundle = [
  DietMixin as Mixin,
  DistanceMixin as Mixin,
  ExerciseActionMixin as Mixin,
  ExercisePlanMixin as Mixin,
  PersonMixin as Mixin,
  PlaceMixin as Mixin,
  PlayActionMixin as Mixin,
  SportsActivityLocationMixin as Mixin,
  SportsEventMixin as Mixin,
  SportsTeamMixin as Mixin];
