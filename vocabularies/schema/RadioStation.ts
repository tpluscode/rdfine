import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface RadioStation extends Schema.LocalBusiness, RdfResource {
}

export function RadioStationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RadioStationClass extends LocalBusinessMixin(Resource) implements RadioStation {
  }
  return RadioStationClass
}

class RadioStationImpl extends RadioStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RadioStation>) {
    super(arg, init)
    this.types.add(schema.RadioStation)
  }
}
RadioStationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RadioStation)
RadioStationMixin.Class = RadioStationImpl
