import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import EntertainmentBusinessMixin from './EntertainmentBusiness';

export interface Casino extends Schema.EntertainmentBusiness, RdfResource {
}

export default function CasinoMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CasinoClass extends EntertainmentBusinessMixin(Resource) implements Casino {
  }
  return CasinoClass
}

class CasinoImpl extends CasinoMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Casino>) {
    super(arg)
    this.types.add(schema.Casino)
    initializeProperties(this, init)
  }
}
CasinoMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Casino)
CasinoMixin.Class = CasinoImpl
