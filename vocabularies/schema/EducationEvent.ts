import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<EducationEvent>) {
    super(arg, init)
    this.types.add(schema.EducationEvent)
  }
}
EducationEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.EducationEvent)
EducationEventMixin.Class = EducationEventImpl
