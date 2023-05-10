import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LandformMixin } from './Landform.js';

export interface BodyOfWater<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Landform<D>, rdfine.RdfResource<D> {
}

export function BodyOfWaterMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<BodyOfWater> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BodyOfWaterClass extends LandformMixin(Resource) implements Partial<BodyOfWater> {
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

export const fromPointer = createFactory<BodyOfWater>([LandformMixin, BodyOfWaterMixin], { types: [schema.BodyOfWater] });
