import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<RiverBodyOfWater>) {
    super(arg, init)
    this.types.add(schema.RiverBodyOfWater)
  }
}
RiverBodyOfWaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RiverBodyOfWater)
RiverBodyOfWaterMixin.Class = RiverBodyOfWaterImpl
