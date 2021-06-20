import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { EventMixin } from './Event';

export interface BusinessEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, RdfResource<D> {
}

export function BusinessEventMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BusinessEvent> & RdfResourceCore> & Base {
  @namespace(schema)
  class BusinessEventClass extends EventMixin(Resource) implements Partial<BusinessEvent> {
  }
  return BusinessEventClass
}

class BusinessEventImpl extends BusinessEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BusinessEvent>) {
    super(arg, init)
    this.types.add(schema.BusinessEvent)
  }

  static readonly __mixins: Mixin[] = [BusinessEventMixin, EventMixin];
}
BusinessEventMixin.appliesTo = schema.BusinessEvent
BusinessEventMixin.Class = BusinessEventImpl

export const fromPointer = createFactory<BusinessEvent>([EventMixin, BusinessEventMixin], { types: [schema.BusinessEvent] });
