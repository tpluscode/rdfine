import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface DanceEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
}

export function DanceEventMixin<Base extends Constructor>(Resource: Base): Constructor<DanceEvent> & Base {
  @namespace(schema)
  class DanceEventClass extends EventMixin(Resource) implements Partial<DanceEvent> {
  }
  return DanceEventClass
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
