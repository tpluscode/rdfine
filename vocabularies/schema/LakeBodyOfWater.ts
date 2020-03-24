import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<LakeBodyOfWater>) {
    super(arg)
    this.types.add(schema.LakeBodyOfWater)
    initializeProperties(this, init)
  }
}
LakeBodyOfWaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LakeBodyOfWater)
LakeBodyOfWaterMixin.Class = LakeBodyOfWaterImpl
