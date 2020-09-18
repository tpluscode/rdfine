import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { IntangibleMixin } from './Intangible';

export interface Trip extends Schema.Intangible, RdfResource {
  arrivalTime: Date | undefined;
  departureTime: Date | undefined;
  offers: Schema.Demand | Schema.Offer | undefined;
  provider: Schema.Organization | Schema.Person | undefined;
}

export function TripMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TripClass extends IntangibleMixin(Resource) implements Trip {
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    arrivalTime: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    departureTime: Date | undefined;
    @property.resource()
    offers: Schema.Demand | Schema.Offer | undefined;
    @property.resource()
    provider: Schema.Organization | Schema.Person | undefined;
  }
  return TripClass
}

class TripImpl extends TripMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Trip>) {
    super(arg, init)
    this.types.add(schema.Trip)
  }

  static readonly __mixins: Mixin[] = [TripMixin, IntangibleMixin];
}
TripMixin.appliesTo = schema.Trip
TripMixin.Class = TripImpl
