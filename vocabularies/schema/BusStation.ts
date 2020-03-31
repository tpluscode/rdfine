import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<BusStation>) {
    super(arg, init)
    this.types.add(schema.BusStation)
  }
}
BusStationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BusStation)
BusStationMixin.Class = BusStationImpl
