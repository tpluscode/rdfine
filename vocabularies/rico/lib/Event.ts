import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { ThingMixin } from './Thing.js';

export interface Event<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, rdfine.RdfResource<D> {
  affectsOrAffected: Rico.Thing<D> | undefined;
  certainty: RDF.Literal | undefined;
  eventIsSourceOfEventRelation: Rico.EventRelation<D> | undefined;
  hasEventType: Rico.EventType<D> | undefined;
  hasOrHadParticipant: Rico.Thing<D> | undefined;
  hasOrHadSubevent: Rico.Event<D> | undefined;
  history: RDF.Literal | undefined;
  isEventAssociatedWith: Rico.Thing<D> | undefined;
  isOrWasSubeventOf: Rico.Event<D> | undefined;
  resultsOrResultedIn: Rico.Thing<D> | undefined;
}

declare global {
  interface RicoVocabulary {
    Event: Factory<Rico.Event>;
  }
}

export function EventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Event & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class EventClass extends ThingMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    affectsOrAffected: Rico.Thing | undefined;
    @rdfine.property()
    certainty: RDF.Literal | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.EventRelation] })
    eventIsSourceOfEventRelation: Rico.EventRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.EventType] })
    hasEventType: Rico.EventType | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    hasOrHadParticipant: Rico.Thing | undefined;
    @rdfine.property.resource({ as: [EventMixin] })
    hasOrHadSubevent: Rico.Event | undefined;
    @rdfine.property()
    history: RDF.Literal | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    isEventAssociatedWith: Rico.Thing | undefined;
    @rdfine.property.resource({ as: [EventMixin] })
    isOrWasSubeventOf: Rico.Event | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    resultsOrResultedIn: Rico.Thing | undefined;
  }
  return EventClass as any
}
EventMixin.appliesTo = rico.Event
EventMixin.createFactory = (env: RdfineEnvironment) => createFactory<Event>([ThingMixin, EventMixin], { types: [rico.Event] }, env)
