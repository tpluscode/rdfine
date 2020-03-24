import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface Ticket extends Schema.Intangible, RdfResource {
  dateIssued: Date | Date;
  issuedBy: Schema.Organization;
  priceCurrency: string;
  ticketedSeat: Schema.Seat;
  ticketNumber: string;
  ticketToken: rdf.Term;
  ticketTokenLiteral: string;
  totalPrice: Schema.PriceSpecification;
  totalPriceLiteral: number | string;
  underName: Schema.Organization | Schema.Person;
}

export default function TicketMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TicketClass extends IntangibleMixin(Resource) implements Ticket {
    @property.literal()
    dateIssued!: Date | Date;
    @property.resource()
    issuedBy!: Schema.Organization;
    @property.literal()
    priceCurrency!: string;
    @property.resource()
    ticketedSeat!: Schema.Seat;
    @property.literal()
    ticketNumber!: string;
    @property()
    ticketToken!: rdf.Term;
    @property.literal({ path: schema.ticketToken })
    ticketTokenLiteral!: string;
    @property.resource()
    totalPrice!: Schema.PriceSpecification;
    @property.literal({ path: schema.totalPrice })
    totalPriceLiteral!: number | string;
    @property.resource()
    underName!: Schema.Organization | Schema.Person;
  }
  return TicketClass
}

class TicketImpl extends TicketMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Ticket)
  }
}
TicketMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Ticket)
TicketMixin.Class = TicketImpl
