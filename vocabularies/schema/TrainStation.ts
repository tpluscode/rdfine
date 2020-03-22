import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.TrainStation)
  }
}
TrainStationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.TrainStation)
TrainStationMixin.Class = TrainStationImpl