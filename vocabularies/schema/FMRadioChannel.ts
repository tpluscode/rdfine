import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.FMRadioChannel)
  }
}
FMRadioChannelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FMRadioChannel)
FMRadioChannelMixin.Class = FMRadioChannelImpl
