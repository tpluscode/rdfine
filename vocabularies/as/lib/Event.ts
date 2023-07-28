import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { as } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as As from '../index.js';
import { ObjectMixin } from './Object.js';

export interface Event<D extends RDF.DatasetCore = RDF.DatasetCore> extends As.Object<D>, rdfine.RdfResource<D> {
}

export function EventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Event & RdfResourceCore> & Base {
  @rdfine.namespace(as)
  class EventClass extends ObjectMixin(Resource) {
  }
  return EventClass as any
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
