import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { EventMixin } from './Event';

export interface FoodEvent extends Schema.Event, RdfResource {
}

export function FoodEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FoodEventClass extends EventMixin(Resource) implements FoodEvent {
  }
  return FoodEventClass
}

class FoodEventImpl extends FoodEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FoodEvent>) {
    super(arg, init)
    this.types.add(schema.FoodEvent)
  }
}
FoodEventMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FoodEvent)
FoodEventMixin.Class = FoodEventImpl
