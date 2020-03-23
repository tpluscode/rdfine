import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EventMixin from './Event';

export interface TheaterEvent extends Schema.Event, RdfResource {
}

export default function TheaterEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TheaterEventClass extends EventMixin(Resource) implements TheaterEvent {
  }
  return TheaterEventClass
}

class TheaterEventImpl extends TheaterEventMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TheaterEvent)
  }
}
TheaterEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TheaterEvent)
TheaterEventMixin.Class = TheaterEventImpl
