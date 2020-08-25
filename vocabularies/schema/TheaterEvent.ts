import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EventMixin } from './Event';

export interface TheaterEvent extends Schema.Event, RdfResource {
}

export function TheaterEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TheaterEventClass extends EventMixin(Resource) implements TheaterEvent {
  }
  return TheaterEventClass
}

class TheaterEventImpl extends TheaterEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TheaterEvent>) {
    super(arg, init)
    this.types.add(schema.TheaterEvent)
  }

  static readonly __mixins: Mixin[] = [TheaterEventMixin, EventMixin];
}
TheaterEventMixin.appliesTo = schema.TheaterEvent
TheaterEventMixin.Class = TheaterEventImpl
