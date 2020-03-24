import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import ReservationMixin from './Reservation';

export interface FoodEstablishmentReservation extends Schema.Reservation, RdfResource {
  endTime: Date | Date;
  partySize: Schema.QuantitativeValue;
  partySizeLiteral: number;
  startTime: Date | Date;
}

export default function FoodEstablishmentReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FoodEstablishmentReservationClass extends ReservationMixin(Resource) implements FoodEstablishmentReservation {
    @property.literal()
    endTime!: Date | Date;
    @property.resource()
    partySize!: Schema.QuantitativeValue;
    @property.literal({ type: Number, path: schema.partySize })
    partySizeLiteral!: number;
    @property.literal()
    startTime!: Date | Date;
  }
  return FoodEstablishmentReservationClass
}

class FoodEstablishmentReservationImpl extends FoodEstablishmentReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<FoodEstablishmentReservation>) {
    super(arg)
    this.types.add(schema.FoodEstablishmentReservation)
    initializeProperties(this, init)
  }
}
FoodEstablishmentReservationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FoodEstablishmentReservation)
FoodEstablishmentReservationMixin.Class = FoodEstablishmentReservationImpl
