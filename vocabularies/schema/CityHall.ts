import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import GovernmentBuildingMixin from './GovernmentBuilding';

export interface CityHall extends Schema.GovernmentBuilding, RdfResource {
}

export default function CityHallMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CityHallClass extends GovernmentBuildingMixin(Resource) implements CityHall {
  }
  return CityHallClass
}

class CityHallImpl extends CityHallMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CityHall)
  }
}
CityHallMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CityHall)
CityHallMixin.Class = CityHallImpl
