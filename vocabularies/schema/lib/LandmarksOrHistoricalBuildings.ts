import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PlaceMixin } from './Place.js';

export interface LandmarksOrHistoricalBuildings<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Place<D>, rdfine.RdfResource<D> {
}

export function LandmarksOrHistoricalBuildingsMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<LandmarksOrHistoricalBuildings & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LandmarksOrHistoricalBuildingsClass extends PlaceMixin(Resource) {
  }
  return LandmarksOrHistoricalBuildingsClass as any
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

export const fromPointer = createFactory<LandmarksOrHistoricalBuildings>([PlaceMixin, LandmarksOrHistoricalBuildingsMixin], { types: [schema.LandmarksOrHistoricalBuildings] });
