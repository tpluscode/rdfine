import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface ChildrensEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
}

export function ChildrensEventMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ChildrensEvent> & RdfResourceCore> & Base {
  @namespace(schema)
  class ChildrensEventClass extends EventMixin(Resource) implements Partial<ChildrensEvent> {
  }
  return ChildrensEventClass
}

class ChildrensEventImpl extends ChildrensEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ChildrensEvent>) {
    super(arg, init)
    this.types.add(schema.ChildrensEvent)
  }

  static readonly __mixins: Mixin[] = [ChildrensEventMixin, EventMixin];
}
ChildrensEventMixin.appliesTo = schema.ChildrensEvent
ChildrensEventMixin.Class = ChildrensEventImpl

export const fromPointer = createFactory<ChildrensEvent>([EventMixin, ChildrensEventMixin], { types: [schema.ChildrensEvent] });
