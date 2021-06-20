import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { BodyOfWaterMixin } from './BodyOfWater';

export interface LakeBodyOfWater<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BodyOfWater<D>, RdfResource<D> {
}

export function LakeBodyOfWaterMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<LakeBodyOfWater> & RdfResourceCore> & Base {
  @namespace(schema)
  class LakeBodyOfWaterClass extends BodyOfWaterMixin(Resource) implements Partial<LakeBodyOfWater> {
  }
  return LakeBodyOfWaterClass
}

class LakeBodyOfWaterImpl extends LakeBodyOfWaterMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LakeBodyOfWater>) {
    super(arg, init)
    this.types.add(schema.LakeBodyOfWater)
  }

  static readonly __mixins: Mixin[] = [LakeBodyOfWaterMixin, BodyOfWaterMixin];
}
LakeBodyOfWaterMixin.appliesTo = schema.LakeBodyOfWater
LakeBodyOfWaterMixin.Class = LakeBodyOfWaterImpl

export const fromPointer = createFactory<LakeBodyOfWater>([BodyOfWaterMixin, LakeBodyOfWaterMixin], { types: [schema.LakeBodyOfWater] });
