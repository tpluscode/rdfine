import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ThingMixin } from './Thing';

export interface Event<ID extends ResourceNode = ResourceNode> extends Schema.Thing<ID>, RdfResource<ID> {
  about: Schema.Thing<SiblingNode<ID>> | undefined;
  actor: Schema.Person<SiblingNode<ID>> | undefined;
  aggregateRating: Schema.AggregateRating<SiblingNode<ID>> | undefined;
  attendee: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  attendees: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  audience: Schema.Audience<SiblingNode<ID>> | undefined;
  composer: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  contributor: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  director: Schema.Person<SiblingNode<ID>> | undefined;
  doorTime: Date | undefined;
  duration: Schema.Duration<SiblingNode<ID>> | undefined;
  endDate: Date | undefined;
  eventAttendanceMode: Schema.EventAttendanceModeEnumeration | undefined;
  eventSchedule: Schema.Schedule<SiblingNode<ID>> | undefined;
  eventStatus: Schema.EventStatusType | undefined;
  funder: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  inLanguage: Schema.Language<SiblingNode<ID>> | undefined;
  inLanguageLiteral: string | undefined;
  isAccessibleForFree: boolean | undefined;
  location: Schema.Place<SiblingNode<ID>> | Schema.PostalAddress<SiblingNode<ID>> | undefined;
  locationLiteral: string | undefined;
  maximumAttendeeCapacity: number | undefined;
  maximumPhysicalAttendeeCapacity: number | undefined;
  maximumVirtualAttendeeCapacity: number | undefined;
  offers: Schema.Demand<SiblingNode<ID>> | Schema.Offer<SiblingNode<ID>> | undefined;
  organizer: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  performer: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  performers: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  previousStartDate: Date | undefined;
  recordedIn: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  remainingAttendeeCapacity: number | undefined;
  review: Schema.Review<SiblingNode<ID>> | undefined;
  sponsor: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  startDate: Date | undefined;
  subEvent: Schema.Event<SiblingNode<ID>> | undefined;
  subEvents: Schema.Event<SiblingNode<ID>> | undefined;
  superEvent: Schema.Event<SiblingNode<ID>> | undefined;
  translator: Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
  typicalAgeRange: string | undefined;
  workFeatured: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  workPerformed: Schema.CreativeWork<SiblingNode<ID>> | undefined;
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
