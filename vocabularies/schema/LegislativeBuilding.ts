import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<LegislativeBuilding>) {
    super(arg)
    this.types.add(schema.LegislativeBuilding)
    initializeProperties<LegislativeBuilding>(this, init)
  }
}
LegislativeBuildingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LegislativeBuilding)
LegislativeBuildingMixin.Class = LegislativeBuildingImpl
