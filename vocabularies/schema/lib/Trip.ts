import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Trip<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  arrivalTime: Date | undefined;
  departureTime: Date | undefined;
  itinerary: Schema.ItemList<D> | Schema.Place<D> | undefined;
  offers: Schema.Demand<D> | Schema.Offer<D> | undefined;
  partOfTrip: Schema.Trip<D> | undefined;
  provider: Schema.Organization<D> | Schema.Person<D> | undefined;
  subTrip: Schema.Trip<D> | undefined;
}

export function TripMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Trip> & RdfResourceCore> & Base {
  @namespace(schema)
  class TripClass extends IntangibleMixin(Resource) implements Partial<Trip> {
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    arrivalTime: Date | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    departureTime: Date | undefined;
    @property.resource()
    itinerary: Schema.ItemList | Schema.Place | undefined;
    @property.resource()
    offers: Schema.Demand | Schema.Offer | undefined;
    @property.resource()
    partOfTrip: Schema.Trip | undefined;
    @property.resource()
    provider: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    subTrip: Schema.Trip | undefined;
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
