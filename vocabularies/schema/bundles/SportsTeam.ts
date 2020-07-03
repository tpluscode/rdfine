import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsOrganizationMixin } from '../SportsOrganization';
import { SportsTeamMixin } from '../SportsTeam';
import { PersonMixin } from '../Person';

export const SportsTeamBundle = [
  SportsOrganizationMixin as Mixin,
  SportsTeamMixin as Mixin,
  PersonMixin as Mixin];
