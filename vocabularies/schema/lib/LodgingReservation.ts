import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ReservationMixin } from './Reservation.js';

export interface LodgingReservation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Reservation<D>, rdfine.RdfResource<D> {
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

export function LodgingReservationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<LodgingReservation> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LodgingReservationClass extends ReservationMixin(Resource) implements Partial<LodgingReservation> {
    @rdfine.property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    checkinTime: Date | undefined;
    @rdfine.property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    checkoutTime: Date | undefined;
    @rdfine.property.literal()
    lodgingUnitDescription: string | undefined;
    @rdfine.property.literal()
    lodgingUnitType: string | undefined;
    @rdfine.property({ path: schema.lodgingUnitType })
    lodgingUnitTypeTerm: Schema.QualitativeValue | undefined;
    @rdfine.property.resource()
    numAdults: Schema.QuantitativeValue | undefined;
    @rdfine.property.literal({ path: schema.numAdults, type: Number })
    numAdultsLiteral: number | undefined;
    @rdfine.property.resource()
    numChildren: Schema.QuantitativeValue | undefined;
    @rdfine.property.literal({ path: schema.numChildren, type: Number })
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
