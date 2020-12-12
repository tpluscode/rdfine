import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PlaceMixin } from './Place';

export interface LandmarksOrHistoricalBuildings<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Place<D>, RdfResource<D> {
}

export function LandmarksOrHistoricalBuildingsMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<LandmarksOrHistoricalBuildings> & RdfResourceCore> & Base {
  @namespace(schema)
  class LandmarksOrHistoricalBuildingsClass extends PlaceMixin(Resource) implements Partial<LandmarksOrHistoricalBuildings> {
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
