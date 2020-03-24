import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import BodyOfWaterMixin from './BodyOfWater';

export interface RiverBodyOfWater extends Schema.BodyOfWater, RdfResource {
}

export default function RiverBodyOfWaterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RiverBodyOfWaterClass extends BodyOfWaterMixin(Resource) implements RiverBodyOfWater {
  }
  return RiverBodyOfWaterClass
}

class RiverBodyOfWaterImpl extends RiverBodyOfWaterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<RiverBodyOfWater>) {
    super(arg)
    this.types.add(schema.RiverBodyOfWater)
    initializeProperties(this, init)
  }
}
RiverBodyOfWaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RiverBodyOfWater)
RiverBodyOfWaterMixin.Class = RiverBodyOfWaterImpl
