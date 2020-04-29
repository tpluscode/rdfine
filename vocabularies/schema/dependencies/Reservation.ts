import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { ReservationMixin } from '../Reservation';
import { OrganizationMixin } from '../Organization';
import { PersonMixin } from '../Person';
import { ProgramMembershipMixin } from '../ProgramMembership';
import { ThingMixin } from '../Thing';
import { TicketMixin } from '../Ticket';
import { PriceSpecificationMixin } from '../PriceSpecification';

export const ReservationDependencies = [
  IntangibleMixin as Mixin,
  ReservationMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  ProgramMembershipMixin as Mixin,
  ThingMixin as Mixin,
  TicketMixin as Mixin,
  PriceSpecificationMixin as Mixin];
