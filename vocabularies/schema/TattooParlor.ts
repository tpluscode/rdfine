import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import HealthAndBeautyBusinessMixin from './HealthAndBeautyBusiness';

export interface TattooParlor extends Schema.HealthAndBeautyBusiness, RdfResource {
}

export default function TattooParlorMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TattooParlorClass extends HealthAndBeautyBusinessMixin(Resource) implements TattooParlor {
  }
  return TattooParlorClass
}

class TattooParlorImpl extends TattooParlorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<TattooParlor>) {
    super(arg, init)
    this.types.add(schema.TattooParlor)
  }
}
TattooParlorMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TattooParlor)
TattooParlorMixin.Class = TattooParlorImpl
