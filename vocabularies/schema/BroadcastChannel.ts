import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface BroadcastChannel extends Schema.Intangible, RdfResource {
  broadcastChannelId: string;
  broadcastFrequency: Schema.BroadcastFrequencySpecification;
  broadcastFrequencyLiteral: string;
  broadcastServiceTier: string;
  genre: string | string;
  inBroadcastLineup: Schema.CableOrSatelliteService;
  providesBroadcastService: Schema.BroadcastService;
}

export default function BroadcastChannelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BroadcastChannelClass extends IntangibleMixin(Resource) implements BroadcastChannel {
    @property.literal()
    broadcastChannelId!: string;
    @property.resource()
    broadcastFrequency!: Schema.BroadcastFrequencySpecification;
    @property.literal({ path: schema.broadcastFrequency })
    broadcastFrequencyLiteral!: string;
    @property.literal()
    broadcastServiceTier!: string;
    @property.literal()
    genre!: string | string;
    @property.resource()
    inBroadcastLineup!: Schema.CableOrSatelliteService;
    @property.resource()
    providesBroadcastService!: Schema.BroadcastService;
  }
  return BroadcastChannelClass
}

class BroadcastChannelImpl extends BroadcastChannelMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.BroadcastChannel)
  }
}
BroadcastChannelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BroadcastChannel)
BroadcastChannelMixin.Class = BroadcastChannelImpl
