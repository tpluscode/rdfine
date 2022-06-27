import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { ProgramMembershipMixin } from '../lib/ProgramMembership';
import { ReservationMixin } from '../lib/Reservation';
import { ThingMixin } from '../lib/Thing';
import { TicketMixin } from '../lib/Ticket';

export const ReservationBundle = [
  IntangibleMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  ProgramMembershipMixin as Mixin,
  ReservationMixin as Mixin,
  ThingMixin as Mixin,
  TicketMixin as Mixin];
