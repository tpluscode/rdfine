import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface SubwayStation extends Schema.CivicStructure, RdfResource {
}

export default function SubwayStationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SubwayStationClass extends CivicStructureMixin(Resource) implements SubwayStation {
  }
  return SubwayStationClass
}

class SubwayStationImpl extends SubwayStationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SubwayStation)
  }
}
SubwayStationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SubwayStation)
SubwayStationMixin.Class = SubwayStationImpl
