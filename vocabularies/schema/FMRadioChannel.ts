import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<FMRadioChannel>) {
    super(arg, init)
    this.types.add(schema.FMRadioChannel)
  }
}
FMRadioChannelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FMRadioChannel)
FMRadioChannelMixin.Class = FMRadioChannelImpl
