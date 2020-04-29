import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { CivicStructureMixin } from './CivicStructure';

export interface GovernmentBuilding extends Schema.CivicStructure, RdfResource {
}

export function GovernmentBuildingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GovernmentBuildingClass extends CivicStructureMixin(Resource) implements GovernmentBuilding {
  }
  return GovernmentBuildingClass
}

class GovernmentBuildingImpl extends GovernmentBuildingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GovernmentBuilding>) {
    super(arg, init)
    this.types.add(schema.GovernmentBuilding)
  }
}
GovernmentBuildingMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GovernmentBuilding)
GovernmentBuildingMixin.Class = GovernmentBuildingImpl
