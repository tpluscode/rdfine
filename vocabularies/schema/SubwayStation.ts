import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<SubwayStation>) {
    super(arg)
    this.types.add(schema.SubwayStation)
    initializeProperties<SubwayStation>(this, init)
  }
}
SubwayStationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SubwayStation)
SubwayStationMixin.Class = SubwayStationImpl
