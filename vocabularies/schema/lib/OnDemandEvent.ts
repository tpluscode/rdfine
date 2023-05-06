import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PublicationEventMixin } from './PublicationEvent.js';

export interface OnDemandEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PublicationEvent<D>, RdfResource<D> {
}

export function OnDemandEventMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<OnDemandEvent> & RdfResourceCore> & Base {
  @namespace(schema)
  class OnDemandEventClass extends PublicationEventMixin(Resource) implements Partial<OnDemandEvent> {
  }
  return OnDemandEventClass
}

class OnDemandEventImpl extends OnDemandEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OnDemandEvent>) {
    super(arg, init)
    this.types.add(schema.OnDemandEvent)
  }

  static readonly __mixins: Mixin[] = [OnDemandEventMixin, PublicationEventMixin];
}
OnDemandEventMixin.appliesTo = schema.OnDemandEvent
OnDemandEventMixin.Class = OnDemandEventImpl

export const fromPointer = createFactory<OnDemandEvent>([PublicationEventMixin, OnDemandEventMixin], { types: [schema.OnDemandEvent] });
