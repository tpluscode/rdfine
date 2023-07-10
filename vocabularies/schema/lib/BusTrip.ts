import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TripMixin } from './Trip.js';

export interface BusTrip<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Trip<D>, rdfine.RdfResource<D> {
  arrivalBusStop: Schema.BusStation<D> | Schema.BusStop<D> | undefined;
  busName: string | undefined;
  busNumber: string | undefined;
  departureBusStop: Schema.BusStation<D> | Schema.BusStop<D> | undefined;
}

export function BusTripMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<BusTrip & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BusTripClass extends TripMixin(Resource) {
    @rdfine.property.resource()
    arrivalBusStop: Schema.BusStation | Schema.BusStop | undefined;
    @rdfine.property.literal()
    busName: string | undefined;
    @rdfine.property.literal()
    busNumber: string | undefined;
    @rdfine.property.resource()
    departureBusStop: Schema.BusStation | Schema.BusStop | undefined;
  }
  return BusTripClass as any
}

class BusTripImpl extends BusTripMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BusTrip>) {
    super(arg, init)
    this.types.add(schema.BusTrip)
  }

  static readonly __mixins: Mixin[] = [BusTripMixin, TripMixin];
}
BusTripMixin.appliesTo = schema.BusTrip
BusTripMixin.Class = BusTripImpl

export const fromPointer = createFactory<BusTrip>([TripMixin, BusTripMixin], { types: [schema.BusTrip] });
