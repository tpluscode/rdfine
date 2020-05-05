import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EventMixin } from './Event';

export interface LiteraryEvent extends Schema.Event, RdfResource {
}

export function LiteraryEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LiteraryEventClass extends EventMixin(Resource) implements LiteraryEvent {
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
