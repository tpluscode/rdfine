import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Canal)
  }
}
CanalMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Canal)
CanalMixin.Class = CanalImpl
