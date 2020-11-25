import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ReservationMixin } from './Reservation';

export interface FoodEstablishmentReservation<ID extends ResourceNode = ResourceNode> extends Schema.Reservation<ID>, RdfResource<ID> {
  endTime: Date | undefined;
  partySize: Schema.QuantitativeValue<SiblingNode<ID>> | undefined;
  partySizeLiteral: number | undefined;
  startTime: Date | undefined;
}

export function FoodEstablishmentReservationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FoodEstablishmentReservationClass extends ReservationMixin(Resource) implements FoodEstablishmentReservation {
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    endTime: Date | undefined;
    @property.resource()
    partySize: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.partySize, type: Number })
    partySizeLiteral: number | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    startTime: Date | undefined;
  }
  return FoodEstablishmentReservationClass
}

class FoodEstablishmentReservationImpl extends FoodEstablishmentReservationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FoodEstablishmentReservation>) {
    super(arg, init)
    this.types.add(schema.FoodEstablishmentReservation)
  }

  static readonly __mixins: Mixin[] = [FoodEstablishmentReservationMixin, ReservationMixin];
}
FoodEstablishmentReservationMixin.appliesTo = schema.FoodEstablishmentReservation
FoodEstablishmentReservationMixin.Class = FoodEstablishmentReservationImpl
