import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { BodyOfWaterMixin } from './BodyOfWater.js';

export interface RiverBodyOfWater<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BodyOfWater<D>, RdfResource<D> {
}

export function RiverBodyOfWaterMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RiverBodyOfWater> & RdfResourceCore> & Base {
  @namespace(schema)
  class RiverBodyOfWaterClass extends BodyOfWaterMixin(Resource) implements Partial<RiverBodyOfWater> {
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

export const fromPointer = createFactory<RiverBodyOfWater>([BodyOfWaterMixin, RiverBodyOfWaterMixin], { types: [schema.RiverBodyOfWater] });
