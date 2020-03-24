import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface RadioStation extends Schema.LocalBusiness, RdfResource {
}

export default function RadioStationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RadioStationClass extends LocalBusinessMixin(Resource) implements RadioStation {
  }
  return RadioStationClass
}

class RadioStationImpl extends RadioStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<RadioStation>) {
    super(arg)
    this.types.add(schema.RadioStation)
    initializeProperties(this, init)
  }
}
RadioStationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RadioStation)
RadioStationMixin.Class = RadioStationImpl
