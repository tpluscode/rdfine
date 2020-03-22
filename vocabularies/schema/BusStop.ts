import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CivicStructureMixin from './CivicStructure';

export interface BusStop extends Schema.CivicStructure, RdfResource {
}

export default function BusStopMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BusStopClass extends CivicStructureMixin(Resource) implements BusStop {
  }
  return BusStopClass
}

class BusStopImpl extends BusStopMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.BusStop)
  }
}
BusStopMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BusStop)
BusStopMixin.Class = BusStopImpl
