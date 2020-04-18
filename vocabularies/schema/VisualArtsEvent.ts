import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<VisualArtsEvent>) {
    super(arg, init)
    this.types.add(schema.VisualArtsEvent)
  }
}
VisualArtsEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.VisualArtsEvent)
VisualArtsEventMixin.Class = VisualArtsEventImpl
