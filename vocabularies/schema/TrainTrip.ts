import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { TripMixin } from './Trip';

export interface TrainTrip extends Schema.Trip, RdfResource {
  arrivalPlatform: string;
  arrivalStation: Schema.TrainStation;
  departurePlatform: string;
  departureStation: Schema.TrainStation;
  trainName: string;
  trainNumber: string;
}

export function TrainTripMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TrainTripClass extends TripMixin(Resource) implements TrainTrip {
    @property.literal()
    arrivalPlatform!: string;
    @property.resource()
    arrivalStation!: Schema.TrainStation;
    @property.literal()
    departurePlatform!: string;
    @property.resource()
    departureStation!: Schema.TrainStation;
    @property.literal()
    trainName!: string;
    @property.literal()
    trainNumber!: string;
  }
  return TrainTripClass
}

class TrainTripImpl extends TrainTripMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TrainTrip>) {
    super(arg, init)
    this.types.add(schema.TrainTrip)
  }

  static readonly __mixins: Mixin[] = [TrainTripMixin, TripMixin];
}
TrainTripMixin.appliesTo = schema.TrainTrip
TrainTripMixin.Class = TrainTripImpl
