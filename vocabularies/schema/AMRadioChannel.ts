import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import RadioChannelMixin from './RadioChannel';

export interface AMRadioChannel extends Schema.RadioChannel, RdfResource {
}

export default function AMRadioChannelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AMRadioChannelClass extends RadioChannelMixin(Resource) implements AMRadioChannel {
  }
  return AMRadioChannelClass
}

class AMRadioChannelImpl extends AMRadioChannelMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.AMRadioChannel)
  }
}
AMRadioChannelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AMRadioChannel)
AMRadioChannelMixin.Class = AMRadioChannelImpl
