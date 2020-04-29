import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { BodyOfWaterMixin } from './BodyOfWater';

export interface Canal extends Schema.BodyOfWater, RdfResource {
}

export function CanalMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CanalClass extends BodyOfWaterMixin(Resource) implements Canal {
  }
  return CanalClass
}

class CanalImpl extends CanalMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Canal>) {
    super(arg, init)
    this.types.add(schema.Canal)
  }
}
CanalMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Canal)
CanalMixin.Class = CanalImpl
