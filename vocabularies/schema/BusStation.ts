import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.BusStation)
  }
}
BusStationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BusStation)
BusStationMixin.Class = BusStationImpl
