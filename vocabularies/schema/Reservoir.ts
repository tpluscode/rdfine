import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import BodyOfWaterMixin from './BodyOfWater';

export interface Reservoir extends Schema.BodyOfWater, RdfResource {
}

export default function ReservoirMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ReservoirClass extends BodyOfWaterMixin(Resource) implements Reservoir {
  }
  return ReservoirClass
}

class ReservoirImpl extends ReservoirMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Reservoir>) {
    super(arg)
    this.types.add(schema.Reservoir)
    initializeProperties(this, init)
  }
}
ReservoirMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Reservoir)
ReservoirMixin.Class = ReservoirImpl
