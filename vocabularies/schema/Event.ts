import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import ThingMixin from './Thing';

export interface Event extends Schema.Thing, RdfResource {
  about: Schema.Thing;
  actor: Schema.Person;
  aggregateRating: Schema.AggregateRating;
  attendee: Schema.Organization | Schema.Person;
  attendees: Schema.Organization | Schema.Person;
  audience: Schema.Audience;
  composer: Schema.Organization | Schema.Person;
  contributor: Schema.Organization | Schema.Person;
  director: Schema.Person;
  doorTime: Date | Date;
  duration: Schema.Duration;
  endDate: Date | Date;
  eventStatus: Schema.EventStatusType;
  funder: Schema.Organization | Schema.Person;
  inLanguage: Schema.Language;
  inLanguageLiteral: string;
  isAccessibleForFree: boolean;
  location: Schema.Place | Schema.PostalAddress;
  locationLiteral: string;
  maximumAttendeeCapacity: number;
  offers: Schema.Demand | Schema.Offer;
  organizer: Schema.Organization | Schema.Person;
  performer: Schema.Organization | Schema.Person;
  performers: Schema.Organization | Schema.Person;
  previousStartDate: Date;
  recordedIn: Schema.CreativeWork;
  remainingAttendeeCapacity: number;
  review: Schema.Review;
  sponsor: Schema.Organization | Schema.Person;
  startDate: Date | Date;
  subEvent: Event;
  subEvents: Event;
  superEvent: Event;
  translator: Schema.Organization | Schema.Person;
  typicalAgeRange: string;
  workFeatured: Schema.CreativeWork;
  workPerformed: Schema.CreativeWork;
}

export default function EventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EventClass extends ThingMixin(Resource) implements Event {
    @property.resource()
    about!: Schema.Thing;
    @property.resource()
    actor!: Schema.Person;
    @property.resource()
    aggregateRating!: Schema.AggregateRating;
    @property.resource()
    attendee!: Schema.Organization | Schema.Person;
    @property.resource()
    attendees!: Schema.Organization | Schema.Person;
    @property.resource()
    audience!: Schema.Audience;
    @property.resource()
    composer!: Schema.Organization | Schema.Person;
    @property.resource()
    contributor!: Schema.Organization | Schema.Person;
    @property.resource()
    director!: Schema.Person;
    @property.literal()
    doorTime!: Date | Date;
    @property.resource()
    duration!: Schema.Duration;
    @property.literal()
    endDate!: Date | Date;
    @property()
    eventStatus!: Schema.EventStatusType;
    @property.resource()
    funder!: Schema.Organization | Schema.Person;
    @property.resource()
    inLanguage!: Schema.Language;
    @property.literal({ path: schema.inLanguage })
    inLanguageLiteral!: string;
    @property.literal({ type: Boolean })
    isAccessibleForFree!: boolean;
    @property.resource()
    location!: Schema.Place | Schema.PostalAddress;
    @property.literal({ path: schema.location })
    locationLiteral!: string;
    @property.literal({ type: Number })
    maximumAttendeeCapacity!: number;
    @property.resource()
    offers!: Schema.Demand | Schema.Offer;
    @property.resource()
    organizer!: Schema.Organization | Schema.Person;
    @property.resource()
    performer!: Schema.Organization | Schema.Person;
    @property.resource()
    performers!: Schema.Organization | Schema.Person;
    @property.literal()
    previousStartDate!: Date;
    @property.resource()
    recordedIn!: Schema.CreativeWork;
    @property.literal({ type: Number })
    remainingAttendeeCapacity!: number;
    @property.resource()
    review!: Schema.Review;
    @property.resource()
    sponsor!: Schema.Organization | Schema.Person;
    @property.literal()
    startDate!: Date | Date;
    @property.resource()
    subEvent!: Event;
    @property.resource()
    subEvents!: Event;
    @property.resource()
    superEvent!: Event;
    @property.resource()
    translator!: Schema.Organization | Schema.Person;
    @property.literal()
    typicalAgeRange!: string;
    @property.resource()
    workFeatured!: Schema.CreativeWork;
    @property.resource()
    workPerformed!: Schema.CreativeWork;
  }
  return EventClass
}

class EventImpl extends EventMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Event)
  }
}
EventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Event)
EventMixin.Class = EventImpl
