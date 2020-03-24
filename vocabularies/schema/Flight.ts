import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import TripMixin from './Trip';

export interface Flight extends Schema.Trip, RdfResource {
  aircraft: Schema.Vehicle;
  aircraftLiteral: string;
  arrivalAirport: Schema.Airport;
  arrivalGate: string;
  arrivalTerminal: string;
  boardingPolicy: Schema.BoardingPolicyType;
  carrier: Schema.Organization;
  departureAirport: Schema.Airport;
  departureGate: string;
  departureTerminal: string;
  estimatedFlightDuration: Schema.Duration;
  estimatedFlightDurationLiteral: string;
  flightDistance: Schema.Distance;
  flightDistanceLiteral: string;
  flightNumber: string;
  mealService: string;
  seller: Schema.Organization | Schema.Person;
  webCheckinTime: Date;
}

export default function FlightMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FlightClass extends TripMixin(Resource) implements Flight {
    @property.resource()
    aircraft!: Schema.Vehicle;
    @property.literal({ path: schema.aircraft })
    aircraftLiteral!: string;
    @property.resource()
    arrivalAirport!: Schema.Airport;
    @property.literal()
    arrivalGate!: string;
    @property.literal()
    arrivalTerminal!: string;
    @property()
    boardingPolicy!: Schema.BoardingPolicyType;
    @property.resource()
    carrier!: Schema.Organization;
    @property.resource()
    departureAirport!: Schema.Airport;
    @property.literal()
    departureGate!: string;
    @property.literal()
    departureTerminal!: string;
    @property.resource()
    estimatedFlightDuration!: Schema.Duration;
    @property.literal({ path: schema.estimatedFlightDuration })
    estimatedFlightDurationLiteral!: string;
    @property.resource()
    flightDistance!: Schema.Distance;
    @property.literal({ path: schema.flightDistance })
    flightDistanceLiteral!: string;
    @property.literal()
    flightNumber!: string;
    @property.literal()
    mealService!: string;
    @property.resource()
    seller!: Schema.Organization | Schema.Person;
    @property.literal()
    webCheckinTime!: Date;
  }
  return FlightClass
}

class FlightImpl extends FlightMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Flight>) {
    super(arg)
    this.types.add(schema.Flight)
    initializeProperties(this, init)
  }
}
FlightMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Flight)
FlightMixin.Class = FlightImpl
