import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EventMixin } from './Event';

export interface EducationEvent extends Schema.Event, RdfResource {
}

export function EducationEventMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [EducationEventMixin, EventMixin];
}
EducationEventMixin.appliesTo = schema.EducationEvent
EducationEventMixin.Class = EducationEventImpl
