import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LandformMixin from './Landform';

export interface BodyOfWater extends Schema.Landform, RdfResource {
}

export default function BodyOfWaterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BodyOfWaterClass extends LandformMixin(Resource) implements BodyOfWater {
  }
  return BodyOfWaterClass
}

class BodyOfWaterImpl extends BodyOfWaterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<BodyOfWater>) {
    super(arg)
    this.types.add(schema.BodyOfWater)
    initializeProperties<BodyOfWater>(this, init)
  }
}
BodyOfWaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.BodyOfWater)
BodyOfWaterMixin.Class = BodyOfWaterImpl
