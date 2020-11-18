import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Ticket<ID extends ResourceNode = ResourceNode> extends Schema.Intangible<ID>, RdfResource<ID> {
  dateIssued: Date | undefined;
  issuedBy: Schema.Organization<SiblingNode<ID>> | undefined;
  priceCurrency: string | undefined;
  ticketedSeat: Schema.Seat<SiblingNode<ID>> | undefined;
  ticketNumber: string | undefined;
  ticketToken: string | undefined;
  ticketTokenTerm: RDF.NamedNode | undefined;
  totalPrice: Schema.PriceSpecification<SiblingNode<ID>> | undefined;
  totalPriceLiteral: number | string | undefined;
  underName: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
}

export function TicketMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TicketClass extends IntangibleMixin(Resource) implements Ticket {
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    dateIssued: Date | undefined;
    @property.resource()
    issuedBy: Schema.Organization | undefined;
    @property.literal()
    priceCurrency: string | undefined;
    @property.resource()
    ticketedSeat: Schema.Seat | undefined;
    @property.literal()
    ticketNumber: string | undefined;
    @property.literal()
    ticketToken: string | undefined;
    @property({ path: schema.ticketToken })
    ticketTokenTerm: RDF.NamedNode | undefined;
    @property.resource()
    totalPrice: Schema.PriceSpecification | undefined;
    @property.literal({ path: schema.totalPrice })
    totalPriceLiteral: number | string | undefined;
    @property.resource()
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
