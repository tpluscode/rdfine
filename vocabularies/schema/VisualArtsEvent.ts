import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EventMixin from './Event';

export interface VisualArtsEvent extends Schema.Event, RdfResource {
}

export default function VisualArtsEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class VisualArtsEventClass extends EventMixin(Resource) implements VisualArtsEvent {
  }
  return VisualArtsEventClass
}

class VisualArtsEventImpl extends VisualArtsEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<VisualArtsEvent>) {
    super(arg)
    this.types.add(schema.VisualArtsEvent)
    initializeProperties(this, init)
  }
}
VisualArtsEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.VisualArtsEvent)
VisualArtsEventMixin.Class = VisualArtsEventImpl
