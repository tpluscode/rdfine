import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { ThingMixin } from './Thing';

export interface Event<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, RdfResource<D> {
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

export function EventMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Event> & RdfResourceCore> & Base {
  @namespace(rico)
  class EventClass extends ThingMixin(Resource) implements Partial<Event> {
    @property.resource({ implicitTypes: [rico.Thing] })
    affectsOrAffected: Rico.Thing | undefined;
    @property()
    certainty: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [rico.EventRelation] })
    eventIsSourceOfEventRelation: Rico.EventRelation | undefined;
    @property.resource({ implicitTypes: [rico.EventType] })
    hasEventType: Rico.EventType | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    hasOrHadParticipant: Rico.Thing | undefined;
    @property.resource({ as: [EventMixin] })
    hasOrHadSubevent: Rico.Event | undefined;
    @property()
    history: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    isEventAssociatedWith: Rico.Thing | undefined;
    @property.resource({ as: [EventMixin] })
    isOrWasSubeventOf: Rico.Event | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    resultsOrResultedIn: Rico.Thing | undefined;
  }
  return EventClass
}

class EventImpl extends EventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Event>) {
    super(arg, init)
    this.types.add(rico.Event)
  }

  static readonly __mixins: Mixin[] = [EventMixin, ThingMixin];
}
EventMixin.appliesTo = rico.Event
EventMixin.Class = EventImpl

export const fromPointer = createFactory<Event>([ThingMixin, EventMixin], { types: [rico.Event] });
