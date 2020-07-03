import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { ProgramMembershipMixin } from '../ProgramMembership';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';

export const ProgramMembershipBundle = [
  IntangibleMixin as Mixin,
  ProgramMembershipMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin];
