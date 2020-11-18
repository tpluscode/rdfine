import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { SportsEventMixin } from '../lib/SportsEvent';
import { PersonMixin } from '../lib/Person';
import { SportsTeamMixin } from '../lib/SportsTeam';

export const SportsEventBundle = [
  EventMixin as Mixin,
  SportsEventMixin as Mixin,
  PersonMixin as Mixin,
  SportsTeamMixin as Mixin];
