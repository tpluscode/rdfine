import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface ComedyEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, rdfine.RdfResource<D> {
}

export function ComedyEventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ComedyEvent & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ComedyEventClass extends EventMixin(Resource) {
  }
  return ComedyEventClass as any
}

class ComedyEventImpl extends ComedyEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ComedyEvent>) {
    super(arg, init)
    this.types.add(schema.ComedyEvent)
  }

  static readonly __mixins: Mixin[] = [ComedyEventMixin, EventMixin];
}
ComedyEventMixin.appliesTo = schema.ComedyEvent
ComedyEventMixin.Class = ComedyEventImpl

export const fromPointer = createFactory<ComedyEvent>([EventMixin, ComedyEventMixin], { types: [schema.ComedyEvent] });
