import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<OceanBodyOfWater>) {
    super(arg)
    this.types.add(schema.OceanBodyOfWater)
    initializeProperties(this, init)
  }
}
OceanBodyOfWaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.OceanBodyOfWater)
OceanBodyOfWaterMixin.Class = OceanBodyOfWaterImpl
