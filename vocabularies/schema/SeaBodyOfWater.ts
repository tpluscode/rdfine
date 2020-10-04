import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { BodyOfWaterMixin } from './BodyOfWater';

export interface SeaBodyOfWater<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BodyOfWater<D>, RdfResource<D> {
}

export function SeaBodyOfWaterMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [SeaBodyOfWaterMixin, BodyOfWaterMixin];
}
SeaBodyOfWaterMixin.appliesTo = schema.SeaBodyOfWater
SeaBodyOfWaterMixin.Class = SeaBodyOfWaterImpl
