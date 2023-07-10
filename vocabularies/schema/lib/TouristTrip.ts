import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TripMixin } from './Trip.js';

export interface TouristTrip<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Trip<D>, rdfine.RdfResource<D> {
  touristType: Schema.Audience<D> | undefined;
  touristTypeLiteral: string | undefined;
}

export function TouristTripMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<TouristTrip & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TouristTripClass extends TripMixin(Resource) {
    @rdfine.property.resource()
    touristType: Schema.Audience | undefined;
    @rdfine.property.literal({ path: schema.touristType })
    touristTypeLiteral: string | undefined;
  }
  return TouristTripClass as any
}

class TouristTripImpl extends TouristTripMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TouristTrip>) {
    super(arg, init)
    this.types.add(schema.TouristTrip)
  }

  static readonly __mixins: Mixin[] = [TouristTripMixin, TripMixin];
}
TouristTripMixin.appliesTo = schema.TouristTrip
TouristTripMixin.Class = TouristTripImpl

export const fromPointer = createFactory<TouristTrip>([TripMixin, TouristTripMixin], { types: [schema.TouristTrip] });
