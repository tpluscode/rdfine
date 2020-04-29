import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { SportsOrganizationMixin } from '../SportsOrganization';
import { SportsTeamMixin } from '../SportsTeam';
import { PersonMixin } from '../Person';

export const SportsTeamDependencies = [
  SportsOrganizationMixin as Mixin,
  SportsTeamMixin as Mixin,
  PersonMixin as Mixin];
