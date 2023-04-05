import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface ComedyEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
}

export function ComedyEventMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ComedyEvent> & RdfResourceCore> & Base {
  @namespace(schema)
  class ComedyEventClass extends EventMixin(Resource) implements Partial<ComedyEvent> {
  }
  return ComedyEventClass
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
