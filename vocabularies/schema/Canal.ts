import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { BodyOfWaterMixin } from './BodyOfWater';

export interface Canal<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BodyOfWater<D>, RdfResource<D> {
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

  static readonly __mixins: Mixin[] = [CanalMixin, BodyOfWaterMixin];
}
CanalMixin.appliesTo = schema.Canal
CanalMixin.Class = CanalImpl
