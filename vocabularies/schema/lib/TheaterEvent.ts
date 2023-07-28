import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface TheaterEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, rdfine.RdfResource<D> {
}

export function TheaterEventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<TheaterEvent & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TheaterEventClass extends EventMixin(Resource) {
  }
  return TheaterEventClass as any
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
