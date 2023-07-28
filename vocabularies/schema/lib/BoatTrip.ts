import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TripMixin } from './Trip.js';

export interface BoatTrip<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Trip<D>, rdfine.RdfResource<D> {
  arrivalBoatTerminal: Schema.BoatTerminal<D> | undefined;
  departureBoatTerminal: Schema.BoatTerminal<D> | undefined;
}

export function BoatTripMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<BoatTrip & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BoatTripClass extends TripMixin(Resource) {
    @rdfine.property.resource()
    arrivalBoatTerminal: Schema.BoatTerminal | undefined;
    @rdfine.property.resource()
    departureBoatTerminal: Schema.BoatTerminal | undefined;
  }
  return BoatTripClass as any
}

class BoatTripImpl extends BoatTripMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BoatTrip>) {
    super(arg, init)
    this.types.add(schema.BoatTrip)
  }

  static readonly __mixins: Mixin[] = [BoatTripMixin, TripMixin];
}
BoatTripMixin.appliesTo = schema.BoatTrip
BoatTripMixin.Class = BoatTripImpl

export const fromPointer = createFactory<BoatTrip>([TripMixin, BoatTripMixin], { types: [schema.BoatTrip] });
