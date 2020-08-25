import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EventMixin } from './Event';

export interface DanceEvent extends Schema.Event, RdfResource {
}

export function DanceEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DanceEventClass extends EventMixin(Resource) implements DanceEvent {
  }
  return DanceEventClass
}

class DanceEventImpl extends DanceEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DanceEvent>) {
    super(arg, init)
    this.types.add(schema.DanceEvent)
  }

  static readonly __mixins: Mixin[] = [DanceEventMixin, EventMixin];
}
DanceEventMixin.appliesTo = schema.DanceEvent
DanceEventMixin.Class = DanceEventImpl
