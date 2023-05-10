import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface LiteraryEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, rdfine.RdfResource<D> {
}

export function LiteraryEventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<LiteraryEvent> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LiteraryEventClass extends EventMixin(Resource) implements Partial<LiteraryEvent> {
  }
  return LiteraryEventClass
}

class LiteraryEventImpl extends LiteraryEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LiteraryEvent>) {
    super(arg, init)
    this.types.add(schema.LiteraryEvent)
  }

  static readonly __mixins: Mixin[] = [LiteraryEventMixin, EventMixin];
}
LiteraryEventMixin.appliesTo = schema.LiteraryEvent
LiteraryEventMixin.Class = LiteraryEventImpl

export const fromPointer = createFactory<LiteraryEvent>([EventMixin, LiteraryEventMixin], { types: [schema.LiteraryEvent] });
