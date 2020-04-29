import { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../Intangible';
import { TicketMixin } from '../Ticket';
import { OrganizationMixin } from '../Organization';
import { SeatMixin } from '../Seat';
import { PriceSpecificationMixin } from '../PriceSpecification';
import { PersonMixin } from '../Person';

export const TicketDependencies = [
  IntangibleMixin as Mixin,
  TicketMixin as Mixin,
  OrganizationMixin as Mixin,
  SeatMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  PersonMixin as Mixin];
