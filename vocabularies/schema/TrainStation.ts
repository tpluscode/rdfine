import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface TrainStation extends Schema.CivicStructure, RdfResource {
}

export default function TrainStationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class TrainStationClass extends CivicStructureMixin(Resource) implements TrainStation {
  }
  return TrainStationClass
}

class TrainStationImpl extends TrainStationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<TrainStation>) {
    super(arg)
    this.types.add(schema.TrainStation)
    initializeProperties(this, init)
  }
}
TrainStationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TrainStation)
TrainStationMixin.Class = TrainStationImpl
