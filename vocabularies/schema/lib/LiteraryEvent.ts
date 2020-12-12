import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface LiteraryEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
}

export function LiteraryEventMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<LiteraryEvent> & RdfResourceCore> & Base {
  @namespace(schema)
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
