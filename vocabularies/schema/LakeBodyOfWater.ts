import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import BodyOfWaterMixin from './BodyOfWater';

export interface LakeBodyOfWater extends Schema.BodyOfWater, RdfResource {
}

export default function LakeBodyOfWaterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LakeBodyOfWaterClass extends BodyOfWaterMixin(Resource) implements LakeBodyOfWater {
  }
  return LakeBodyOfWaterClass
}

class LakeBodyOfWaterImpl extends LakeBodyOfWaterMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.LakeBodyOfWater)
  }
}
LakeBodyOfWaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LakeBodyOfWater)
LakeBodyOfWaterMixin.Class = LakeBodyOfWaterImpl
