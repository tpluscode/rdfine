import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface Reservation extends Schema.Intangible, RdfResource {
  bookingAgent: Schema.Organization | Schema.Person;
  bookingTime: Date;
  broker: Schema.Organization | Schema.Person;
  modifiedTime: Date;
  priceCurrency: string;
  programMembershipUsed: Schema.ProgramMembership;
  provider: Schema.Organization | Schema.Person;
  reservationFor: Schema.Thing;
  reservationId: string;
  reservationStatus: Schema.ReservationStatusType;
  reservedTicket: Schema.Ticket;
  totalPrice: Schema.PriceSpecification;
  totalPriceLiteral: number | string;
  underName: Schema.Organization | Schema.Person;
}

export default function ReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReservationClass extends IntangibleMixin(Resource) implements Reservation {
    @property.resource()
    bookingAgent!: Schema.Organization | Schema.Person;
    @property.literal()
    bookingTime!: Date;
    @property.resource()
    broker!: Schema.Organization | Schema.Person;
    @property.literal()
    modifiedTime!: Date;
    @property.literal()
    priceCurrency!: string;
    @property.resource()
    programMembershipUsed!: Schema.ProgramMembership;
    @property.resource()
    provider!: Schema.Organization | Schema.Person;
    @property.resource()
    reservationFor!: Schema.Thing;
    @property.literal()
    reservationId!: string;
    @property()
    reservationStatus!: Schema.ReservationStatusType;
    @property.resource()
    reservedTicket!: Schema.Ticket;
    @property.resource()
    totalPrice!: Schema.PriceSpecification;
    @property.literal({ path: schema.totalPrice })
    totalPriceLiteral!: number | string;
    @property.resource()
    underName!: Schema.Organization | Schema.Person;
  }
  return ReservationClass
}

class ReservationImpl extends ReservationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Reservation)
  }
}
ReservationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Reservation)
ReservationMixin.Class = ReservationImpl