import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<OceanBodyOfWater>) {
    super(arg, init)
    this.types.add(schema.OceanBodyOfWater)
  }
}
OceanBodyOfWaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OceanBodyOfWater)
OceanBodyOfWaterMixin.Class = OceanBodyOfWaterImpl
