import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.LandmarksOrHistoricalBuildings)
  }
}
LandmarksOrHistoricalBuildingsMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LandmarksOrHistoricalBuildings)
LandmarksOrHistoricalBuildingsMixin.Class = LandmarksOrHistoricalBuildingsImpl
