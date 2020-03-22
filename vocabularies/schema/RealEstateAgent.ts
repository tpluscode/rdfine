import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface RealEstateAgent extends Schema.LocalBusiness, RdfResource {
}

export default function RealEstateAgentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RealEstateAgentClass extends LocalBusinessMixin(Resource) implements RealEstateAgent {
  }
  return RealEstateAgentClass
}

class RealEstateAgentImpl extends RealEstateAgentMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.RealEstateAgent)
  }
}
RealEstateAgentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RealEstateAgent)
RealEstateAgentMixin.Class = RealEstateAgentImpl