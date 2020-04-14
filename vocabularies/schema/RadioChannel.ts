import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<RadioChannel>) {
    super(arg, init)
    this.types.add(schema.RadioChannel)
  }
}
RadioChannelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RadioChannel)
RadioChannelMixin.Class = RadioChannelImpl
