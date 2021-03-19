import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { as } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '..';
import { ObjectMixin } from './Object';

export interface Event<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, RdfResource<D> {
}

export function EventMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Event> & RdfResourceCore> & Base {
  @namespace(as)
  class EventClass extends ObjectMixin(Resource) implements Partial<Event> {
  }
  return EventClass
}

class EventImpl extends EventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Event>) {
    super(arg, init)
    this.types.add(as.Event)
  }

  static readonly __mixins: Mixin[] = [EventMixin, ObjectMixin];
}
EventMixin.appliesTo = as.Event
EventMixin.Class = EventImpl

export const fromPointer = createFactory<Event>([ObjectMixin, EventMixin], { types: [as.Event] });
