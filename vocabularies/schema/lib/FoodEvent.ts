import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface FoodEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
}

export function FoodEventMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<FoodEvent> & RdfResourceCore> & Base {
  @namespace(schema)
  class FoodEventClass extends EventMixin(Resource) implements Partial<FoodEvent> {
  }
  return FoodEventClass
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
