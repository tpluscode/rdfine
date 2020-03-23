import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EventMixin from './Event';

export interface EducationEvent extends Schema.Event, RdfResource {
}

export default function EducationEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EducationEventClass extends EventMixin(Resource) implements EducationEvent {
  }
  return EducationEventClass
}

class EducationEventImpl extends EducationEventMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.EducationEvent)
  }
}
EducationEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EducationEvent)
EducationEventMixin.Class = EducationEventImpl
