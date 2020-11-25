import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LandformMixin } from './Landform';

export interface BodyOfWater<ID extends ResourceNode = ResourceNode> extends Schema.Landform<ID>, RdfResource<ID> {
}

export function BodyOfWaterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BodyOfWaterClass extends LandformMixin(Resource) implements BodyOfWater {
  }
  return BodyOfWaterClass
}

class BodyOfWaterImpl extends BodyOfWaterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BodyOfWater>) {
    super(arg, init)
    this.types.add(schema.BodyOfWater)
  }

  static readonly __mixins: Mixin[] = [BodyOfWaterMixin, LandformMixin];
}
BodyOfWaterMixin.appliesTo = schema.BodyOfWater
BodyOfWaterMixin.Class = BodyOfWaterImpl
