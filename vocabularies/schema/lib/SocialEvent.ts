import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { EventMixin } from './Event.js';

export interface SocialEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Event<D>, rdfine.RdfResource<D> {
}

export function SocialEventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SocialEvent> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SocialEventClass extends EventMixin(Resource) implements Partial<SocialEvent> {
  }
  return SocialEventClass
}

class SocialEventImpl extends SocialEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SocialEvent>) {
    super(arg, init)
    this.types.add(schema.SocialEvent)
  }

  static readonly __mixins: Mixin[] = [SocialEventMixin, EventMixin];
}
SocialEventMixin.appliesTo = schema.SocialEvent
SocialEventMixin.Class = SocialEventImpl

export const fromPointer = createFactory<SocialEvent>([EventMixin, SocialEventMixin], { types: [schema.SocialEvent] });
