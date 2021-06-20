import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ThingMixin } from './Thing';

export interface Event<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Thing<D>, RdfResource<D> {
  about: Schema.Thing<D> | undefined;
  actor: Schema.Person<D> | undefined;
  aggregateRating: Schema.AggregateRating<D> | undefined;
  attendee: Schema.Organization<D> | Schema.Person<D> | undefined;
  attendees: Schema.Organization<D> | Schema.Person<D> | undefined;
  audience: Schema.Audience<D> | undefined;
  composer: Schema.Organization<D> | Schema.Person<D> | undefined;
  contributor: Schema.Organization<D> | Schema.Person<D> | undefined;
  director: Schema.Person<D> | undefined;
  doorTime: Date | undefined;
  duration: Schema.Duration<D> | undefined;
  endDate: Date | undefined;
  eventAttendanceMode: Schema.EventAttendanceModeEnumeration | undefined;
  eventSchedule: Schema.Schedule<D> | undefined;
  eventStatus: Schema.EventStatusType | undefined;
  funder: Schema.Organization<D> | Schema.Person<D> | undefined;
  inLanguage: Schema.Language<D> | undefined;
  inLanguageLiteral: string | undefined;
  isAccessibleForFree: boolean | undefined;
  location: Schema.Place<D> | Schema.PostalAddress<D> | undefined;
  locationLiteral: string | undefined;
  maximumAttendeeCapacity: number | undefined;
  maximumPhysicalAttendeeCapacity: number | undefined;
  maximumVirtualAttendeeCapacity: number | undefined;
  offers: Schema.Demand<D> | Schema.Offer<D> | undefined;
  organizer: Schema.Organization<D> | Schema.Person<D> | undefined;
  performer: Schema.Organization<D> | Schema.Person<D> | undefined;
  performers: Schema.Organization<D> | Schema.Person<D> | undefined;
  previousStartDate: Date | undefined;
  recordedIn: Schema.CreativeWork<D> | undefined;
  remainingAttendeeCapacity: number | undefined;
  review: Schema.Review<D> | undefined;
  sponsor: Schema.Organization<D> | Schema.Person<D> | undefined;
  startDate: Date | undefined;
  subEvent: Schema.Event<D> | undefined;
  subEvents: Schema.Event<D> | undefined;
  superEvent: Schema.Event<D> | undefined;
  translator: Schema.Organization<D> | Schema.Person<D> | undefined;
  typicalAgeRange: string | undefined;
  workFeatured: Schema.CreativeWork<D> | undefined;
  workPerformed: Schema.CreativeWork<D> | undefined;
}

export function EventMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Event> & RdfResourceCore> & Base {
  @namespace(schema)
  class EventClass extends ThingMixin(Resource) implements Partial<Event> {
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
    eventAttendanceMode: Schema.EventAttendanceModeEnumeration | undefined;
    @property.resource()
    eventSchedule: Schema.Schedule | undefined;
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
    @property.literal({ type: Number })
    maximumPhysicalAttendeeCapacity: number | undefined;
    @property.literal({ type: Number })
    maximumVirtualAttendeeCapacity: number | undefined;
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

export const fromPointer = createFactory<Event>([ThingMixin, EventMixin], { types: [schema.Event] });
