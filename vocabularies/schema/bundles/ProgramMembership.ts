import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { ProgramMembershipMixin } from '../lib/ProgramMembership';
import { QuantitativeValueMixin } from '../lib/QuantitativeValue';

export const ProgramMembershipBundle = [
  IntangibleMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ProgramMembershipMixin as Mixin,
  QuantitativeValueMixin as Mixin];
