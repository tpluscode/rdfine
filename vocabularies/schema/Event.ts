import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ThingMixin } from './Thing';

export interface Event extends Schema.Thing, RdfResource {
  about: Schema.Thing | undefined;
  actor: Schema.Person | undefined;
  aggregateRating: Schema.AggregateRating | undefined;
  attendee: Schema.Organization | Schema.Person | undefined;
  attendees: Schema.Organization | Schema.Person | undefined;
  audience: Schema.Audience | undefined;
  composer: Schema.Organization | Schema.Person | undefined;
  contributor: Schema.Organization | Schema.Person | undefined;
  director: Schema.Person | undefined;
  doorTime: Date | undefined;
  duration: Schema.Duration | undefined;
  endDate: Date | undefined;
  eventStatus: Schema.EventStatusType | undefined;
  funder: Schema.Organization | Schema.Person | undefined;
  inLanguage: Schema.Language | undefined;
  inLanguageLiteral: string | undefined;
  isAccessibleForFree: boolean | undefined;
  location: Schema.Place | Schema.PostalAddress | undefined;
  locationLiteral: string | undefined;
  maximumAttendeeCapacity: number | undefined;
  offers: Schema.Demand | Schema.Offer | undefined;
  organizer: Schema.Organization | Schema.Person | undefined;
  performer: Schema.Organization | Schema.Person | undefined;
  performers: Schema.Organization | Schema.Person | undefined;
  previousStartDate: Date | undefined;
  recordedIn: Schema.CreativeWork | undefined;
  remainingAttendeeCapacity: number | undefined;
  review: Schema.Review | undefined;
  sponsor: Schema.Organization | Schema.Person | undefined;
  startDate: Date | undefined;
  subEvent: Schema.Event | undefined;
  subEvents: Schema.Event | undefined;
  superEvent: Schema.Event | undefined;
  translator: Schema.Organization | Schema.Person | undefined;
  typicalAgeRange: string | undefined;
  workFeatured: Schema.CreativeWork | undefined;
  workPerformed: Schema.CreativeWork | undefined;
}

export function EventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EventClass extends ThingMixin(Resource) implements Event {
    @property.resource()
    about: Schema.Thing | undefined;
    @property.resource()
    actor: Schema.Person | undefined;
    @property.resource()
    aggregateRating: Schema.AggregateRating | undefined;
    @property.resource()
    attendee: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    attendees: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    audience: Schema.Audience | undefined;
    @property.resource()
    composer: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    contributor: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    director: Schema.Person | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#time') })
    doorTime: Date | undefined;
    @property.resource()
    duration: Schema.Duration | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    endDate: Date | undefined;
    @property()
    eventStatus: Schema.EventStatusType | undefined;
    @property.resource()
    funder: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    inLanguage: Schema.Language | undefined;
    @property.literal({ path: schema.inLanguage })
    inLanguageLiteral: string | undefined;
    @property.literal({ type: Boolean })
    isAccessibleForFree: boolean | undefined;
    @property.resource()
    location: Schema.Place | Schema.PostalAddress | undefined;
    @property.literal({ path: schema.location })
    locationLiteral: string | undefined;
    @property.literal({ type: Number })
    maximumAttendeeCapacity: number | undefined;
    @property.resource()
    offers: Schema.Demand | Schema.Offer | undefined;
    @property.resource()
    organizer: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    performer: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    performers: Schema.Organization | Schema.Person | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    previousStartDate: Date | undefined;
    @property.resource()
    recordedIn: Schema.CreativeWork | undefined;
    @property.literal({ type: Number })
    remainingAttendeeCapacity: number | undefined;
    @property.resource()
    review: Schema.Review | undefined;
    @property.resource()
    sponsor: Schema.Organization | Schema.Person | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    startDate: Date | undefined;
    @property.resource()
    subEvent: Schema.Event | undefined;
    @property.resource()
    subEvents: Schema.Event | undefined;
    @property.resource()
    superEvent: Schema.Event | undefined;
    @property.resource()
    translator: Schema.Organization | Schema.Person | undefined;
    @property.literal()
    typicalAgeRange: string | undefined;
    @property.resource()
    workFeatured: Schema.CreativeWork | undefined;
    @property.resource()
    workPerformed: Schema.CreativeWork | undefined;
  }
  return EventClass
}

class EventImpl extends EventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Event>) {
    super(arg, init)
    this.types.add(schema.Event)
  }

  static readonly __mixins: Mixin[] = [EventMixin, ThingMixin];
}
EventMixin.appliesTo = schema.Event
EventMixin.Class = EventImpl
