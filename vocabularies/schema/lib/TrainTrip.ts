import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TripMixin } from './Trip';

export interface TrainTrip<ID extends ResourceNode = ResourceNode> extends Schema.Trip<ID>, RdfResource<ID> {
  arrivalPlatform: string | undefined;
  arrivalStation: Schema.TrainStation<SiblingNode<ID>> | undefined;
  departurePlatform: string | undefined;
  departureStation: Schema.TrainStation<SiblingNode<ID>> | undefined;
  trainName: string | undefined;
  trainNumber: string | undefined;
}

export function TrainTripMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TrainTripClass extends TripMixin(Resource) implements TrainTrip {
    @property.literal()
    arrivalPlatform: string | undefined;
    @property.resource()
    arrivalStation: Schema.TrainStation | undefined;
    @property.literal()
    departurePlatform: string | undefined;
    @property.resource()
    departureStation: Schema.TrainStation | undefined;
    @property.literal()
    trainName: string | undefined;
    @property.literal()
    trainNumber: string | undefined;
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
