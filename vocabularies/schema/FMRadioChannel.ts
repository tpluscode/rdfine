import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import RadioChannelMixin from './RadioChannel';

export interface FMRadioChannel extends Schema.RadioChannel, RdfResource {
}

export default function FMRadioChannelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FMRadioChannelClass extends RadioChannelMixin(Resource) implements FMRadioChannel {
  }
  return FMRadioChannelClass
}

class FMRadioChannelImpl extends FMRadioChannelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<FMRadioChannel>) {
    super(arg)
    this.types.add(schema.FMRadioChannel)
    initializeProperties<FMRadioChannel>(this, init)
  }
}
FMRadioChannelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FMRadioChannel)
FMRadioChannelMixin.Class = FMRadioChannelImpl
