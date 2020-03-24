import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface BusStation extends Schema.CivicStructure, RdfResource {
}

export default function BusStationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BusStationClass extends CivicStructureMixin(Resource) implements BusStation {
  }
  return BusStationClass
}

class BusStationImpl extends BusStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<BusStation>) {
    super(arg)
    this.types.add(schema.BusStation)
    initializeProperties(this, init)
  }
}
BusStationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BusStation)
BusStationMixin.Class = BusStationImpl
