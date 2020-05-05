import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EventMixin } from './Event';

export interface BusinessEvent extends Schema.Event, RdfResource {
}

export function BusinessEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BusinessEventClass extends EventMixin(Resource) implements BusinessEvent {
  }
  return BusinessEventClass
}

class BusinessEventImpl extends BusinessEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BusinessEvent>) {
    super(arg, init)
    this.types.add(schema.BusinessEvent)
  }

  static readonly __mixins: Mixin[] = [BusinessEventMixin, EventMixin];
}
BusinessEventMixin.appliesTo = schema.BusinessEvent
BusinessEventMixin.Class = BusinessEventImpl
