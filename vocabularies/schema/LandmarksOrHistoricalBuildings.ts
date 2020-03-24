import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import PlaceMixin from './Place';

export interface LandmarksOrHistoricalBuildings extends Schema.Place, RdfResource {
}

export default function LandmarksOrHistoricalBuildingsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LandmarksOrHistoricalBuildingsClass extends PlaceMixin(Resource) implements LandmarksOrHistoricalBuildings {
  }
  return LandmarksOrHistoricalBuildingsClass
}

class LandmarksOrHistoricalBuildingsImpl extends LandmarksOrHistoricalBuildingsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<LandmarksOrHistoricalBuildings>) {
    super(arg)
    this.types.add(schema.LandmarksOrHistoricalBuildings)
    initializeProperties(this, init)
  }
}
LandmarksOrHistoricalBuildingsMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LandmarksOrHistoricalBuildings)
LandmarksOrHistoricalBuildingsMixin.Class = LandmarksOrHistoricalBuildingsImpl
