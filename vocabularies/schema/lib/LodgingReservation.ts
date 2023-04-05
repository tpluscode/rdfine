import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReservationMixin } from './Reservation.js';

export interface LodgingReservation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Reservation<D>, RdfResource<D> {
  checkinTime: Date | undefined;
  checkoutTime: Date | undefined;
  lodgingUnitDescription: string | undefined;
  lodgingUnitType: string | undefined;
  lodgingUnitTypeTerm: Schema.QualitativeValue | undefined;
  numAdults: Schema.QuantitativeValue<D> | undefined;
  numAdultsLiteral: number | undefined;
  numChildren: Schema.QuantitativeValue<D> | undefined;
  numChildrenLiteral: number | undefined;
}

export function LodgingReservationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<LodgingReservation> & RdfResourceCore> & Base {
  @namespace(schema)
  class LodgingReservationClass extends ReservationMixin(Resource) implements Partial<LodgingReservation> {
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    checkinTime: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    checkoutTime: Date | undefined;
    @property.literal()
    lodgingUnitDescription: string | undefined;
    @property.literal()
    lodgingUnitType: string | undefined;
    @property({ path: schema.lodgingUnitType })
    lodgingUnitTypeTerm: Schema.QualitativeValue | undefined;
    @property.resource()
    numAdults: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numAdults, type: Number })
    numAdultsLiteral: number | undefined;
    @property.resource()
    numChildren: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.numChildren, type: Number })
    numChildrenLiteral: number | undefined;
  }
  return LodgingReservationClass
}

class LodgingReservationImpl extends LodgingReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LodgingReservation>) {
    super(arg, init)
    this.types.add(schema.LodgingReservation)
  }

  static readonly __mixins: Mixin[] = [LodgingReservationMixin, ReservationMixin];
}
LodgingReservationMixin.appliesTo = schema.LodgingReservation
LodgingReservationMixin.Class = LodgingReservationImpl

export const fromPointer = createFactory<LodgingReservation>([ReservationMixin, LodgingReservationMixin], { types: [schema.LodgingReservation] });
