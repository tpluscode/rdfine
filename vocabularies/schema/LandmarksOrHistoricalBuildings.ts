import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PlaceMixin } from './Place';

export interface LandmarksOrHistoricalBuildings extends Schema.Place, RdfResource {
}

export function LandmarksOrHistoricalBuildingsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LandmarksOrHistoricalBuildingsClass extends PlaceMixin(Resource) implements LandmarksOrHistoricalBuildings {
  }
  return LandmarksOrHistoricalBuildingsClass
}

class LandmarksOrHistoricalBuildingsImpl extends LandmarksOrHistoricalBuildingsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LandmarksOrHistoricalBuildings>) {
    super(arg, init)
    this.types.add(schema.LandmarksOrHistoricalBuildings)
  }

  static readonly __mixins: Mixin[] = [LandmarksOrHistoricalBuildingsMixin, PlaceMixin];
}
LandmarksOrHistoricalBuildingsMixin.appliesTo = schema.LandmarksOrHistoricalBuildings
LandmarksOrHistoricalBuildingsMixin.Class = LandmarksOrHistoricalBuildingsImpl
