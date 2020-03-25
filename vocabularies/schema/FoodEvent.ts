import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EventMixin from './Event';

export interface FoodEvent extends Schema.Event, RdfResource {
}

export default function FoodEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FoodEventClass extends EventMixin(Resource) implements FoodEvent {
  }
  return FoodEventClass
}

class FoodEventImpl extends FoodEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<FoodEvent>) {
    super(arg)
    this.types.add(schema.FoodEvent)
    initializeProperties<FoodEvent>(this, init)
  }
}
FoodEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FoodEvent)
FoodEventMixin.Class = FoodEventImpl
