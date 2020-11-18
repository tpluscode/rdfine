import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { TicketMixin } from '../lib/Ticket';
import { OrganizationMixin } from '../lib/Organization';
import { SeatMixin } from '../lib/Seat';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { PersonMixin } from '../lib/Person';

export const TicketBundle = [
  IntangibleMixin as Mixin,
  TicketMixin as Mixin,
  OrganizationMixin as Mixin,
  SeatMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  PersonMixin as Mixin];
