import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.LegislativeBuilding)
  }
}
LegislativeBuildingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LegislativeBuilding)
LegislativeBuildingMixin.Class = LegislativeBuildingImpl
