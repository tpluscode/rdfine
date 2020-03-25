import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import TripMixin from './Trip';

export interface BusTrip extends Schema.Trip, RdfResource {
  arrivalBusStop: Schema.BusStation | Schema.BusStop;
  busName: string;
  busNumber: string;
  departureBusStop: Schema.BusStation | Schema.BusStop;
}

export default function BusTripMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BusTripClass extends TripMixin(Resource) implements BusTrip {
    @property.resource()
    arrivalBusStop!: Schema.BusStation | Schema.BusStop;
    @property.literal()
    busName!: string;
    @property.literal()
    busNumber!: string;
    @property.resource()
    departureBusStop!: Schema.BusStation | Schema.BusStop;
  }
  return BusTripClass
}

class BusTripImpl extends BusTripMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BusTrip>) {
    super(arg, init)
    this.types.add(schema.BusTrip)
  }
}
BusTripMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BusTrip)
BusTripMixin.Class = BusTripImpl
