import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.RadioChannel)
  }
}
RadioChannelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RadioChannel)
RadioChannelMixin.Class = RadioChannelImpl
