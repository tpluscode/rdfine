import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { EventMixin } from '../lib/Event';
import { PersonMixin } from '../lib/Person';
import { SportsEventMixin } from '../lib/SportsEvent';
import { SportsTeamMixin } from '../lib/SportsTeam';

export const SportsEventBundle = [
  EventMixin as Mixin,
  PersonMixin as Mixin,
  SportsEventMixin as Mixin,
  SportsTeamMixin as Mixin];
