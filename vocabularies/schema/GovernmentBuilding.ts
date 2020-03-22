import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface GovernmentBuilding extends Schema.CivicStructure, RdfResource {
}

export default function GovernmentBuildingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GovernmentBuildingClass extends CivicStructureMixin(Resource) implements GovernmentBuilding {
  }
  return GovernmentBuildingClass
}

class GovernmentBuildingImpl extends GovernmentBuildingMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.GovernmentBuilding)
  }
}
GovernmentBuildingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GovernmentBuilding)
GovernmentBuildingMixin.Class = GovernmentBuildingImpl
