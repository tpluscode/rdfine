import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<AMRadioChannel>) {
    super(arg)
    this.types.add(schema.AMRadioChannel)
    initializeProperties(this, init)
  }
}
AMRadioChannelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AMRadioChannel)
AMRadioChannelMixin.Class = AMRadioChannelImpl
