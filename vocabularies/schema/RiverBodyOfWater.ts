import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { BodyOfWaterMixin } from './BodyOfWater';

export interface RiverBodyOfWater extends Schema.BodyOfWater, RdfResource {
}

export function RiverBodyOfWaterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class RiverBodyOfWaterClass extends BodyOfWaterMixin(Resource) implements RiverBodyOfWater {
  }
  return RiverBodyOfWaterClass
}

class RiverBodyOfWaterImpl extends RiverBodyOfWaterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RiverBodyOfWater>) {
    super(arg, init)
    this.types.add(schema.RiverBodyOfWater)
  }

  static readonly __mixins: Mixin[] = [RiverBodyOfWaterMixin, BodyOfWaterMixin];
}
RiverBodyOfWaterMixin.appliesTo = schema.RiverBodyOfWater
RiverBodyOfWaterMixin.Class = RiverBodyOfWaterImpl
