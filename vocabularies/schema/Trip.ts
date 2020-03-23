import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface Trip extends Schema.Intangible, RdfResource {
  arrivalTime: Date | Date;
  departureTime: Date | Date;
  offers: Schema.Demand | Schema.Offer;
  provider: Schema.Organization | Schema.Person;
}

export default function TripMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TripClass extends IntangibleMixin(Resource) implements Trip {
    @property.literal()
    arrivalTime!: Date | Date;
    @property.literal()
    departureTime!: Date | Date;
    @property.resource()
    offers!: Schema.Demand | Schema.Offer;
    @property.resource()
    provider!: Schema.Organization | Schema.Person;
  }
  return TripClass
}

class TripImpl extends TripMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Trip)
  }
}
TripMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Trip)
TripMixin.Class = TripImpl
