import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface FoodEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, rdfine.RdfResource<D> {
}

export function FoodEventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<FoodEvent & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class FoodEventClass extends EventMixin(Resource) {
  }
  return FoodEventClass as any
}

class FoodEventImpl extends FoodEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FoodEvent>) {
    super(arg, init)
    this.types.add(schema.FoodEvent)
  }

  static readonly __mixins: Mixin[] = [FoodEventMixin, EventMixin];
}
FoodEventMixin.appliesTo = schema.FoodEvent
FoodEventMixin.Class = FoodEventImpl

export const fromPointer = createFactory<FoodEvent>([EventMixin, FoodEventMixin], { types: [schema.FoodEvent] });
