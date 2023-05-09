import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface Ticket<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  dateIssued: Date | undefined;
  issuedBy: Schema.Organization<D> | undefined;
  priceCurrency: string | undefined;
  ticketedSeat: Schema.Seat<D> | undefined;
  ticketNumber: string | undefined;
  ticketToken: string | undefined;
  ticketTokenTerm: RDF.NamedNode | undefined;
  totalPrice: Schema.PriceSpecification<D> | undefined;
  totalPriceLiteral: number | string | undefined;
  underName: Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function TicketMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Ticket> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TicketClass extends IntangibleMixin(Resource) implements Partial<Ticket> {
    @rdfine.property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    dateIssued: Date | undefined;
    @rdfine.property.resource()
    issuedBy: Schema.Organization | undefined;
    @rdfine.property.literal()
    priceCurrency: string | undefined;
    @rdfine.property.resource()
    ticketedSeat: Schema.Seat | undefined;
    @rdfine.property.literal()
    ticketNumber: string | undefined;
    @rdfine.property.literal()
    ticketToken: string | undefined;
    @rdfine.property({ path: schema.ticketToken })
    ticketTokenTerm: RDF.NamedNode | undefined;
    @rdfine.property.resource()
    totalPrice: Schema.PriceSpecification | undefined;
    @rdfine.property.literal({ path: schema.totalPrice })
    totalPriceLiteral: number | string | undefined;
    @rdfine.property.resource()
    underName: Schema.Organization | Schema.Person | undefined;
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

export const fromPointer = createFactory<Ticket>([IntangibleMixin, TicketMixin], { types: [schema.Ticket] });
