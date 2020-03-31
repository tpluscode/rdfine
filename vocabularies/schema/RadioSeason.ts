import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<RadioSeason>) {
    super(arg, init)
    this.types.add(schema.RadioSeason)
  }
}
RadioSeasonMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RadioSeason)
RadioSeasonMixin.Class = RadioSeasonImpl
