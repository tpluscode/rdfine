import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { BodyOfWaterMixin } from './BodyOfWater';

export interface LakeBodyOfWater extends Schema.BodyOfWater, RdfResource {
}

export function LakeBodyOfWaterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LakeBodyOfWaterClass extends BodyOfWaterMixin(Resource) implements LakeBodyOfWater {
  }
  return LakeBodyOfWaterClass
}

class LakeBodyOfWaterImpl extends LakeBodyOfWaterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LakeBodyOfWater>) {
    super(arg, init)
    this.types.add(schema.LakeBodyOfWater)
  }
}
LakeBodyOfWaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LakeBodyOfWater)
LakeBodyOfWaterMixin.Class = LakeBodyOfWaterImpl
