import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import { IntangibleMixin } from '../lib/Intangible';
import { OrganizationMixin } from '../lib/Organization';
import { PersonMixin } from '../lib/Person';
import { PriceSpecificationMixin } from '../lib/PriceSpecification';
import { SeatMixin } from '../lib/Seat';
import { TicketMixin } from '../lib/Ticket';

export const TicketBundle = [
  IntangibleMixin as Mixin,
  OrganizationMixin as Mixin,
  PersonMixin as Mixin,
  PriceSpecificationMixin as Mixin,
  SeatMixin as Mixin,
  TicketMixin as Mixin];
