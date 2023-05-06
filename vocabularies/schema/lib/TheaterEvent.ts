import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface TheaterEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
}

export function TheaterEventMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<TheaterEvent> & RdfResourceCore> & Base {
  @namespace(schema)
  class TheaterEventClass extends EventMixin(Resource) implements Partial<TheaterEvent> {
  }
  return TheaterEventClass
}

class TheaterEventImpl extends TheaterEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TheaterEvent>) {
    super(arg, init)
    this.types.add(schema.TheaterEvent)
  }

  static readonly __mixins: Mixin[] = [TheaterEventMixin, EventMixin];
}
TheaterEventMixin.appliesTo = schema.TheaterEvent
TheaterEventMixin.Class = TheaterEventImpl

export const fromPointer = createFactory<TheaterEvent>([EventMixin, TheaterEventMixin], { types: [schema.TheaterEvent] });
