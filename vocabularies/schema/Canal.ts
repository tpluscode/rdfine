import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import BodyOfWaterMixin from './BodyOfWater';

export interface Canal extends Schema.BodyOfWater, RdfResource {
}

export default function CanalMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CanalClass extends BodyOfWaterMixin(Resource) implements Canal {
  }
  return CanalClass
}

class CanalImpl extends CanalMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Canal>) {
    super(arg)
    this.types.add(schema.Canal)
    initializeProperties<Canal>(this, init)
  }
}
CanalMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Canal)
CanalMixin.Class = CanalImpl
