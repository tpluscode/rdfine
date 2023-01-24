import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { TypeMixin } from './Type';

export interface EventType<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Type<D>, RdfResource<D> {
  isEventTypeOf: Rico.Event<D> | undefined;
}

export function EventTypeMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<EventType> & RdfResourceCore> & Base {
  @namespace(rico)
  class EventTypeClass extends TypeMixin(Resource) implements Partial<EventType> {
    @property.resource({ implicitTypes: [rico.Event] })
    isEventTypeOf: Rico.Event | undefined;
  }
  return EventTypeClass
}

class EventTypeImpl extends EventTypeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EventType>) {
    super(arg, init)
    this.types.add(rico.EventType)
  }

  static readonly __mixins: Mixin[] = [EventTypeMixin, TypeMixin];
}
EventTypeMixin.appliesTo = rico.EventType
EventTypeMixin.Class = EventTypeImpl

export const fromPointer = createFactory<EventType>([TypeMixin, EventTypeMixin], { types: [rico.EventType] });
