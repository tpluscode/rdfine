import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Trip<ID extends ResourceNode = ResourceNode> extends Schema.Intangible<ID>, RdfResource<ID> {
  arrivalTime: Date | undefined;
  departureTime: Date | undefined;
  itinerary: Schema.ItemList<SiblingNode<ID>> | Schema.Place<SiblingNode<ID>> | undefined;
  offers: Schema.Demand<SiblingNode<ID>> | Schema.Offer<SiblingNode<ID>> | undefined;
  partOfTrip: Schema.Trip<SiblingNode<ID>> | undefined;
  provider: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  subTrip: Schema.Trip<SiblingNode<ID>> | undefined;
}

export function TripMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TripClass extends IntangibleMixin(Resource) implements Trip {
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
