import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<SeaBodyOfWater>) {
    super(arg)
    this.types.add(schema.SeaBodyOfWater)
    initializeProperties(this, init)
  }
}
SeaBodyOfWaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SeaBodyOfWater)
SeaBodyOfWaterMixin.Class = SeaBodyOfWaterImpl
