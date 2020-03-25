import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import BroadcastChannelMixin from './BroadcastChannel';

export interface RadioChannel extends Schema.BroadcastChannel, RdfResource {
}

export default function RadioChannelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RadioChannelClass extends BroadcastChannelMixin(Resource) implements RadioChannel {
  }
  return RadioChannelClass
}

class RadioChannelImpl extends RadioChannelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<RadioChannel>) {
    super(arg)
    this.types.add(schema.RadioChannel)
    initializeProperties<RadioChannel>(this, init)
  }
}
RadioChannelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RadioChannel)
RadioChannelMixin.Class = RadioChannelImpl
