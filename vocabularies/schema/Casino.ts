import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { EntertainmentBusinessMixin } from './EntertainmentBusiness';

export interface Casino extends Schema.EntertainmentBusiness, RdfResource {
}

export function CasinoMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CasinoClass extends EntertainmentBusinessMixin(Resource) implements Casino {
  }
  return CasinoClass
}

class CasinoImpl extends CasinoMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Casino>) {
    super(arg, init)
    this.types.add(schema.Casino)
  }
}
CasinoMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Casino)
CasinoMixin.Class = CasinoImpl
