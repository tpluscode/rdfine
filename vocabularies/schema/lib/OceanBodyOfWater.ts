import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { BodyOfWaterMixin } from './BodyOfWater';

export interface OceanBodyOfWater<ID extends ResourceNode = ResourceNode> extends Schema.BodyOfWater<ID>, RdfResource<ID> {
}

export function OceanBodyOfWaterMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [OceanBodyOfWaterMixin, BodyOfWaterMixin];
}
OceanBodyOfWaterMixin.appliesTo = schema.OceanBodyOfWater
OceanBodyOfWaterMixin.Class = OceanBodyOfWaterImpl
