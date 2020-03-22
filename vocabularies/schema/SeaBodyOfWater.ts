import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import BodyOfWaterMixin from './BodyOfWater';

export interface SeaBodyOfWater extends Schema.BodyOfWater, RdfResource {
}

export default function SeaBodyOfWaterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SeaBodyOfWaterClass extends BodyOfWaterMixin(Resource) implements SeaBodyOfWater {
  }
  return SeaBodyOfWaterClass
}

class SeaBodyOfWaterImpl extends SeaBodyOfWaterMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SeaBodyOfWater)
  }
}
SeaBodyOfWaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SeaBodyOfWater)
SeaBodyOfWaterMixin.Class = SeaBodyOfWaterImpl
