import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import EventMixin from './Event';

export interface ExhibitionEvent extends Schema.Event, RdfResource {
}

export default function ExhibitionEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ExhibitionEventClass extends EventMixin(Resource) implements ExhibitionEvent {
  }
  return ExhibitionEventClass
}

class ExhibitionEventImpl extends ExhibitionEventMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ExhibitionEvent)
  }
}
ExhibitionEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ExhibitionEvent)
ExhibitionEventMixin.Class = ExhibitionEventImpl
