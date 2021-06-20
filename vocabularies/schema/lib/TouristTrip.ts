import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TripMixin } from './Trip';

export interface TouristTrip<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Trip<D>, RdfResource<D> {
  touristType: Schema.Audience<D> | undefined;
  touristTypeLiteral: string | undefined;
}

export function TouristTripMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TouristTrip> & RdfResourceCore> & Base {
  @namespace(schema)
  class TouristTripClass extends TripMixin(Resource) implements Partial<TouristTrip> {
    @property.resource()
    touristType: Schema.Audience | undefined;
    @property.literal({ path: schema.touristType })
    touristTypeLiteral: string | undefined;
  }
  return TouristTripClass
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
