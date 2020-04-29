import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { EventMixin } from './Event';

export interface ChildrensEvent extends Schema.Event, RdfResource {
}

export function ChildrensEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ChildrensEventClass extends EventMixin(Resource) implements ChildrensEvent {
  }
  return ChildrensEventClass
}

class ChildrensEventImpl extends ChildrensEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ChildrensEvent>) {
    super(arg, init)
    this.types.add(schema.ChildrensEvent)
  }
}
ChildrensEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ChildrensEvent)
ChildrensEventMixin.Class = ChildrensEventImpl
