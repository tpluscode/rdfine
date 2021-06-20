import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface SaleEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
}

export function SaleEventMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SaleEvent> & RdfResourceCore> & Base {
  @namespace(schema)
  class SaleEventClass extends EventMixin(Resource) implements Partial<SaleEvent> {
  }
  return SaleEventClass
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
