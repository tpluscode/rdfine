import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { ReservationMixin } from '../lib/Reservation';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { ProgramMembershipMixin } from '../lib/ProgramMembership';
import { ThingMixin } from '../lib/Thing';
import { TicketMixin } from '../lib/Ticket';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';

export const ReservationBundle = [
  IntangibleMixin as Mixin,
  ReservationMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ProgramMembershipMixin as Mixin,
  ThingMixin as Mixin,
  TicketMixin as Mixin,
  PriceSpecificationMixin as Mixin];
