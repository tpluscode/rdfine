import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EventMixin from './Event';

export interface ComedyEvent extends Schema.Event, RdfResource {
}

export default function ComedyEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ComedyEventClass extends EventMixin(Resource) implements ComedyEvent {
  }
  return ComedyEventClass
}

class ComedyEventImpl extends ComedyEventMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ComedyEvent)
  }
}
ComedyEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ComedyEvent)
ComedyEventMixin.Class = ComedyEventImpl
