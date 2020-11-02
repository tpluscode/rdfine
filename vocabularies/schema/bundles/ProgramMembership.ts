import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { ProgramMembershipMixin } from '../ProgramMembership';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { QuantitativeValueMixin } from '../QuantitativeValue';

export const ProgramMembershipBundle = [
  IntangibleMixin as Mixin,
  ProgramMembershipMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  QuantitativeValueMixin as Mixin];
