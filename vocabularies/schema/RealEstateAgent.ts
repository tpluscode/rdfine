import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface RealEstateAgent extends Schema.LocalBusiness, RdfResource {
}

export function RealEstateAgentMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [RealEstateAgentMixin, LocalBusinessMixin];
}
RealEstateAgentMixin.appliesTo = schema.RealEstateAgent
RealEstateAgentMixin.Class = RealEstateAgentImpl
