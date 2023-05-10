import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { BodyOfWaterMixin } from './BodyOfWater.js';

export interface Canal<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BodyOfWater<D>, rdfine.RdfResource<D> {
}

export function CanalMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Canal> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CanalClass extends BodyOfWaterMixin(Resource) implements Partial<Canal> {
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

export const fromPointer = createFactory<Canal>([BodyOfWaterMixin, CanalMixin], { types: [schema.Canal] });
