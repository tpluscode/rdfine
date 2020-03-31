import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<SeaBodyOfWater>) {
    super(arg, init)
    this.types.add(schema.SeaBodyOfWater)
  }
}
SeaBodyOfWaterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SeaBodyOfWater)
SeaBodyOfWaterMixin.Class = SeaBodyOfWaterImpl
