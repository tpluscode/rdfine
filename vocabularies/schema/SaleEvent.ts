import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { EventMixin } from './Event';

export interface SaleEvent extends Schema.Event, RdfResource {
}

export function SaleEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SaleEventClass extends EventMixin(Resource) implements SaleEvent {
  }
  return SaleEventClass
}

class SaleEventImpl extends SaleEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SaleEvent>) {
    super(arg, init)
    this.types.add(schema.SaleEvent)
  }

  static readonly __mixins: Mixin[] = [SaleEventMixin, EventMixin];
}
SaleEventMixin.appliesTo = schema.SaleEvent
SaleEventMixin.Class = SaleEventImpl
