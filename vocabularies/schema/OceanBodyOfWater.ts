import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import BodyOfWaterMixin from './BodyOfWater';

export interface OceanBodyOfWater extends Schema.BodyOfWater, RdfResource {
}

export default function OceanBodyOfWaterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class OceanBodyOfWaterClass extends BodyOfWaterMixin(Resource) implements OceanBodyOfWater {
  }
  return OceanBodyOfWaterClass
}

class OceanBodyOfWaterImpl extends OceanBodyOfWaterMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.OceanBodyOfWater)
  }
}
OceanBodyOfWaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OceanBodyOfWater)
OceanBodyOfWaterMixin.Class = OceanBodyOfWaterImpl
