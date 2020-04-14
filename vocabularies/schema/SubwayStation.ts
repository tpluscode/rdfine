import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<SubwayStation>) {
    super(arg, init)
    this.types.add(schema.SubwayStation)
  }
}
SubwayStationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SubwayStation)
SubwayStationMixin.Class = SubwayStationImpl
