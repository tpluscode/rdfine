import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<EducationEvent>) {
    super(arg)
    this.types.add(schema.EducationEvent)
    initializeProperties<EducationEvent>(this, init)
  }
}
EducationEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EducationEvent)
EducationEventMixin.Class = EducationEventImpl
