import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface SaleEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, rdfine.RdfResource<D> {
}

export function SaleEventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SaleEvent & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SaleEventClass extends EventMixin(Resource) {
  }
  return SaleEventClass as any
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

export const fromPointer = createFactory<SaleEvent>([EventMixin, SaleEventMixin], { types: [schema.SaleEvent] });
