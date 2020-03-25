import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkSeasonMixin from './CreativeWorkSeason';

export interface RadioSeason extends Schema.CreativeWorkSeason, RdfResource {
}

export default function RadioSeasonMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RadioSeasonClass extends CreativeWorkSeasonMixin(Resource) implements RadioSeason {
  }
  return RadioSeasonClass
}

class RadioSeasonImpl extends RadioSeasonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<RadioSeason>) {
    super(arg)
    this.types.add(schema.RadioSeason)
    initializeProperties<RadioSeason>(this, init)
  }
}
RadioSeasonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RadioSeason)
RadioSeasonMixin.Class = RadioSeasonImpl
