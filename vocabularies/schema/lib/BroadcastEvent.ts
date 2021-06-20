import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PublicationEventMixin } from './PublicationEvent';

export interface BroadcastEvent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PublicationEvent<D>, RdfResource<D> {
  broadcastOfEvent: Schema.Event<D> | undefined;
  isLiveBroadcast: boolean | undefined;
  subtitleLanguage: Schema.Language<D> | undefined;
  subtitleLanguageLiteral: string | undefined;
  videoFormat: string | undefined;
}

export function BroadcastEventMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BroadcastEvent> & RdfResourceCore> & Base {
  @namespace(schema)
  class BroadcastEventClass extends PublicationEventMixin(Resource) implements Partial<BroadcastEvent> {
    @property.resource()
    broadcastOfEvent: Schema.Event | undefined;
    @property.literal({ type: Boolean })
    isLiveBroadcast: boolean | undefined;
    @property.resource()
    subtitleLanguage: Schema.Language | undefined;
    @property.literal({ path: schema.subtitleLanguage })
    subtitleLanguageLiteral: string | undefined;
    @property.literal()
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
