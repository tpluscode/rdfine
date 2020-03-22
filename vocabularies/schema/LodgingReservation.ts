import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ReservationMixin from './Reservation';

export interface LodgingReservation extends Schema.Reservation, RdfResource {
  checkinTime: Date | Date;
  checkoutTime: Date | Date;
  lodgingUnitDescription: string;
  lodgingUnitType: Schema.QualitativeValue;
  lodgingUnitTypeLiteral: string;
  numAdults: Schema.QuantitativeValue;
  numAdultsLiteral: number;
  numChildren: Schema.QuantitativeValue;
  numChildrenLiteral: number;
}

export default function LodgingReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LodgingReservationClass extends ReservationMixin(Resource) implements LodgingReservation {
    @property.literal()
    checkinTime!: Date | Date;
    @property.literal()
    checkoutTime!: Date | Date;
    @property.literal()
    lodgingUnitDescription!: string;
    @property.resource()
    lodgingUnitType!: Schema.QualitativeValue;
    @property.literal({ path: schema.lodgingUnitType })
    lodgingUnitTypeLiteral!: string;
    @property.resource()
    numAdults!: Schema.QuantitativeValue;
    @property.literal({ type: Number, path: schema.numAdults })
    numAdultsLiteral!: number;
    @property.resource()
    numChildren!: Schema.QuantitativeValue;
    @property.literal({ type: Number, path: schema.numChildren })
    numChildrenLiteral!: number;
  }
  return LodgingReservationClass
}

class LodgingReservationImpl extends LodgingReservationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.LodgingReservation)
  }
}
LodgingReservationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LodgingReservation)
LodgingReservationMixin.Class = LodgingReservationImpl
