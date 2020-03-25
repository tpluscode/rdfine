import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<BusStop>) {
    super(arg, init)
    this.types.add(schema.BusStop)
  }
}
BusStopMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BusStop)
BusStopMixin.Class = BusStopImpl
