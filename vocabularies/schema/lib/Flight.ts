import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TripMixin } from './Trip';

export interface Flight<ID extends ResourceNode = ResourceNode> extends Schema.Trip<ID>, RdfResource<ID> {
  aircraft: Schema.Vehicle<SiblingNode<ID>> | undefined;
  aircraftLiteral: string | undefined;
  arrivalAirport: Schema.Airport<SiblingNode<ID>> | undefined;
  arrivalGate: string | undefined;
  arrivalTerminal: string | undefined;
  boardingPolicy: Schema.BoardingPolicyType | undefined;
  carrier: Schema.Organization<SiblingNode<ID>> | undefined;
  departureAirport: Schema.Airport<SiblingNode<ID>> | undefined;
  departureGate: string | undefined;
  departureTerminal: string | undefined;
  estimatedFlightDuration: Schema.Duration<SiblingNode<ID>> | undefined;
  estimatedFlightDurationLiteral: string | undefined;
  flightDistance: Schema.Distance<SiblingNode<ID>> | undefined;
  flightDistanceLiteral: string | undefined;
  flightNumber: string | undefined;
  mealService: string | undefined;
  seller: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  webCheckinTime: Date | undefined;
}

export function FlightMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FlightClass extends TripMixin(Resource) implements Flight {
    @property.resource()
    aircraft: Schema.Vehicle | undefined;
    @property.literal({ path: schema.aircraft })
    aircraftLiteral: string | undefined;
    @property.resource()
    arrivalAirport: Schema.Airport | undefined;
    @property.literal()
    arrivalGate: string | undefined;
    @property.literal()
    arrivalTerminal: string | undefined;
    @property()
    boardingPolicy: Schema.BoardingPolicyType | undefined;
    @property.resource()
    carrier: Schema.Organization | undefined;
    @property.resource()
    departureAirport: Schema.Airport | undefined;
    @property.literal()
    departureGate: string | undefined;
    @property.literal()
    departureTerminal: string | undefined;
    @property.resource()
    estimatedFlightDuration: Schema.Duration | undefined;
    @property.literal({ path: schema.estimatedFlightDuration })
    estimatedFlightDurationLiteral: string | undefined;
    @property.resource()
    flightDistance: Schema.Distance | undefined;
    @property.literal({ path: schema.flightDistance })
    flightDistanceLiteral: string | undefined;
    @property.literal()
    flightNumber: string | undefined;
    @property.literal()
    mealService: string | undefined;
    @property.resource()
    seller: Schema.Organization | Schema.Person | undefined;
    @property.literal({ type: Date })
    webCheckinTime: Date | undefined;
  }
  return FlightClass
}

class FlightImpl extends FlightMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Flight>) {
    super(arg, init)
    this.types.add(schema.Flight)
  }

  static readonly __mixins: Mixin[] = [FlightMixin, TripMixin];
}
FlightMixin.appliesTo = schema.Flight
FlightMixin.Class = FlightImpl
