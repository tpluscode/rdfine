import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EventMixin from './Event';

export interface DanceEvent extends Schema.Event, RdfResource {
}

export default function DanceEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DanceEventClass extends EventMixin(Resource) implements DanceEvent {
  }
  return DanceEventClass
}

class DanceEventImpl extends DanceEventMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.DanceEvent)
  }
}
DanceEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DanceEvent)
DanceEventMixin.Class = DanceEventImpl
