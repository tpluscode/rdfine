import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { ProgramMembershipMixin } from '../lib/ProgramMembership';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const ProgramMembershipBundle = [
  IntangibleMixin as Mixin,
  ProgramMembershipMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  QuantitativeValueMixin as Mixin];
