import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { BodyOfWaterMixin } from './BodyOfWater.js';

export interface OceanBodyOfWater<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BodyOfWater<D>, rdfine.RdfResource<D> {
}

export function OceanBodyOfWaterMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<OceanBodyOfWater> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class OceanBodyOfWaterClass extends BodyOfWaterMixin(Resource) implements Partial<OceanBodyOfWater> {
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

export const fromPointer = createFactory<OceanBodyOfWater>([BodyOfWaterMixin, OceanBodyOfWaterMixin], { types: [schema.OceanBodyOfWater] });
