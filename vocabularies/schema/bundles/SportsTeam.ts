import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsOrganizationMixin } from '../lib/SportsOrganization';
import { SportsTeamMixin } from '../lib/SportsTeam';
import { PersonMixin } from '../lib/Person';

export const SportsTeamBundle = [
  SportsOrganizationMixin as Mixin,
  SportsTeamMixin as Mixin,
  PersonMixin as Mixin];
