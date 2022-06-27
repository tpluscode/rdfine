import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { PersonMixin } from '../lib/Person';
import { SportsOrganizationMixin } from '../lib/SportsOrganization';
import { SportsTeamMixin } from '../lib/SportsTeam';

export const SportsTeamBundle = [
  PersonMixin as Mixin,
  SportsOrganizationMixin as Mixin,
  SportsTeamMixin as Mixin];
