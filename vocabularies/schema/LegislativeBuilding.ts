import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import GovernmentBuildingMixin from './GovernmentBuilding';

export interface LegislativeBuilding extends Schema.GovernmentBuilding, RdfResource {
}

export default function LegislativeBuildingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LegislativeBuildingClass extends GovernmentBuildingMixin(Resource) implements LegislativeBuilding {
  }
  return LegislativeBuildingClass
}

class LegislativeBuildingImpl extends LegislativeBuildingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LegislativeBuilding>) {
    super(arg, init)
    this.types.add(schema.LegislativeBuilding)
  }
}
LegislativeBuildingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LegislativeBuilding)
LegislativeBuildingMixin.Class = LegislativeBuildingImpl
