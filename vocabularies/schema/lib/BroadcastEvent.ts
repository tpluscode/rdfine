import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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

export function BroadcastEventMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BroadcastEventClass extends PublicationEventMixin(Resource) implements BroadcastEvent {
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
