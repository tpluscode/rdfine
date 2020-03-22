import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.RiverBodyOfWater)
  }
}
RiverBodyOfWaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.RiverBodyOfWater)
RiverBodyOfWaterMixin.Class = RiverBodyOfWaterImpl
