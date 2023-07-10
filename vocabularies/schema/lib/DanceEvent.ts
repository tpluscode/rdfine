import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface DanceEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, rdfine.RdfResource<D> {
}

export function DanceEventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DanceEvent & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DanceEventClass extends EventMixin(Resource) {
  }
  return DanceEventClass as any
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

export const fromPointer = createFactory<DanceEvent>([EventMixin, DanceEventMixin], { types: [schema.DanceEvent] });
