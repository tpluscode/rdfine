import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<RealEstateAgent>) {
    super(arg, init)
    this.types.add(schema.RealEstateAgent)
  }
}
RealEstateAgentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RealEstateAgent)
RealEstateAgentMixin.Class = RealEstateAgentImpl
