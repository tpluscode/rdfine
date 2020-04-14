import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import ResidenceMixin from './Residence';

export interface GatedResidenceCommunity extends Schema.Residence, RdfResource {
}

export default function GatedResidenceCommunityMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GatedResidenceCommunityClass extends ResidenceMixin(Resource) implements GatedResidenceCommunity {
  }
  return GatedResidenceCommunityClass
}

class GatedResidenceCommunityImpl extends GatedResidenceCommunityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GatedResidenceCommunity>) {
    super(arg, init)
    this.types.add(schema.GatedResidenceCommunity)
  }
}
GatedResidenceCommunityMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GatedResidenceCommunity)
GatedResidenceCommunityMixin.Class = GatedResidenceCommunityImpl
