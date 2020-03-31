import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import EventMixin from './Event';

export interface SaleEvent extends Schema.Event, RdfResource {
}

export default function SaleEventMixin<Base extends Constructor>(Resource: Base) {
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
}
SaleEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SaleEvent)
SaleEventMixin.Class = SaleEventImpl
