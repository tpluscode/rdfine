import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../Event';
import { SportsEventMixin } from '../SportsEvent';
import { PersonMixin } from '../Person';
import { SportsTeamMixin } from '../SportsTeam';

export const SportsEventBundle = [
  EventMixin as Mixin,
  SportsEventMixin as Mixin,
  PersonMixin as Mixin,
  SportsTeamMixin as Mixin];
