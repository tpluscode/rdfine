import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface Trip extends Schema.Intangible, RdfResource {
  arrivalTime: Date;
  departureTime: Date;
  offers: Schema.Demand | Schema.Offer;
  provider: Schema.Organization | Schema.Person;
}

export function TripMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TripClass extends IntangibleMixin(Resource) implements Trip {
    @property.literal()
    arrivalTime!: Date;
    @property.literal()
    departureTime!: Date;
    @property.resource()
    offers!: Schema.Demand | Schema.Offer;
    @property.resource()
    provider!: Schema.Organization | Schema.Person;
  }
  return TripClass
}

class TripImpl extends TripMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Trip>) {
    super(arg, init)
    this.types.add(schema.Trip)
  }
}
TripMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Trip)
TripMixin.Class = TripImpl
