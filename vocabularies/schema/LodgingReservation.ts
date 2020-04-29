import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { ReservationMixin } from './Reservation';

export interface LodgingReservation extends Schema.Reservation, RdfResource {
  checkinTime: Date;
  checkoutTime: Date;
  lodgingUnitDescription: string;
  lodgingUnitType: string;
  lodgingUnitTypeTerm: Schema.QualitativeValue;
  numAdults: Schema.QuantitativeValue;
  numAdultsLiteral: number;
  numChildren: Schema.QuantitativeValue;
  numChildrenLiteral: number;
}

export function LodgingReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LodgingReservationClass extends ReservationMixin(Resource) implements LodgingReservation {
    @property.literal()
    checkinTime!: Date;
    @property.literal()
    checkoutTime!: Date;
    @property.literal()
    lodgingUnitDescription!: string;
    @property.literal()
    lodgingUnitType!: string;
    @property({ path: schema.lodgingUnitType })
    lodgingUnitTypeTerm!: Schema.QualitativeValue;
    @property.resource()
    numAdults!: Schema.QuantitativeValue;
    @property.literal({ path: schema.numAdults, type: Number })
    numAdultsLiteral!: number;
    @property.resource()
    numChildren!: Schema.QuantitativeValue;
    @property.literal({ path: schema.numChildren, type: Number })
    numChildrenLiteral!: number;
  }
  return LodgingReservationClass
}

class LodgingReservationImpl extends LodgingReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LodgingReservation>) {
    super(arg, init)
    this.types.add(schema.LodgingReservation)
  }
}
LodgingReservationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LodgingReservation)
LodgingReservationMixin.Class = LodgingReservationImpl
