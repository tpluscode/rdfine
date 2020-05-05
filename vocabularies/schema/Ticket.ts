import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface Ticket extends Schema.Intangible, RdfResource {
  dateIssued: Date;
  issuedBy: Schema.Organization;
  priceCurrency: string;
  ticketedSeat: Schema.Seat;
  ticketNumber: string;
  ticketToken: string;
  ticketTokenTerm: RDF.NamedNode;
  totalPrice: Schema.PriceSpecification;
  totalPriceLiteral: number | string;
  underName: Schema.Organization | Schema.Person;
}

export function TicketMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TicketClass extends IntangibleMixin(Resource) implements Ticket {
    @property.literal()
    dateIssued!: Date;
    @property.resource()
    issuedBy!: Schema.Organization;
    @property.literal()
    priceCurrency!: string;
    @property.resource()
    ticketedSeat!: Schema.Seat;
    @property.literal()
    ticketNumber!: string;
    @property.literal()
    ticketToken!: string;
    @property({ path: schema.ticketToken })
    ticketTokenTerm!: RDF.NamedNode;
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
  constructor(arg: ResourceNode, init?: Initializer<Ticket>) {
    super(arg, init)
    this.types.add(schema.Ticket)
  }

  static readonly __mixins: Mixin[] = [TicketMixin, IntangibleMixin];
}
TicketMixin.appliesTo = schema.Ticket
TicketMixin.Class = TicketImpl
