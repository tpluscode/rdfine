import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PlayActionMixin } from '../PlayAction';
import { ExerciseActionMixin } from '../ExerciseAction';
import { PlaceMixin } from '../Place';
import { DistanceMixin } from '../Distance';
import { PersonMixin } from '../Person';
import { SportsActivityLocationMixin } from '../SportsActivityLocation';
import { SportsEventMixin } from '../SportsEvent';
import { SportsTeamMixin } from '../SportsTeam';

export const ExerciseActionBundle = [
  PlayActionMixin as Mixin,
  ExerciseActionMixin as Mixin,
  PlaceMixin as Mixin,
  DistanceMixin as Mixin,
  PersonMixin as Mixin,
  SportsActivityLocationMixin as Mixin,
  SportsEventMixin as Mixin,
  SportsTeamMixin as Mixin];
