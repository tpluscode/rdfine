import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PublicationEventMixin } from './PublicationEvent.js';

export interface BroadcastEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PublicationEvent<D>, rdfine.RdfResource<D> {
  broadcastOfEvent: Schema.Event<D> | undefined;
  isLiveBroadcast: boolean | undefined;
  subtitleLanguage: Schema.Language<D> | undefined;
  subtitleLanguageLiteral: string | undefined;
  videoFormat: string | undefined;
}

export function BroadcastEventMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<BroadcastEvent> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BroadcastEventClass extends PublicationEventMixin(Resource) implements Partial<BroadcastEvent> {
    @rdfine.property.resource()
    broadcastOfEvent: Schema.Event | undefined;
    @rdfine.property.literal({ type: Boolean })
    isLiveBroadcast: boolean | undefined;
    @rdfine.property.resource()
    subtitleLanguage: Schema.Language | undefined;
    @rdfine.property.literal({ path: schema.subtitleLanguage })
    subtitleLanguageLiteral: string | undefined;
    @rdfine.property.literal()
    videoFormat: string | undefined;
  }
  return BroadcastEventClass
}

class BroadcastEventImpl extends BroadcastEventMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BroadcastEvent>) {
    super(arg, init)
    this.types.add(schema.BroadcastEvent)
  }

  static readonly __mixins: Mixin[] = [BroadcastEventMixin, PublicationEventMixin];
}
BroadcastEventMixin.appliesTo = schema.BroadcastEvent
BroadcastEventMixin.Class = BroadcastEventImpl

export const fromPointer = createFactory<BroadcastEvent>([PublicationEventMixin, BroadcastEventMixin], { types: [schema.BroadcastEvent] });
