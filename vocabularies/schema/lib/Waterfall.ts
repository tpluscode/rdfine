import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { BodyOfWaterMixin } from './BodyOfWater.js';

export interface Waterfall<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BodyOfWater<D>, rdfine.RdfResource<D> {
}

export function WaterfallMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Waterfall & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class WaterfallClass extends BodyOfWaterMixin(Resource) {
  }
  return WaterfallClass as any
}

class WaterfallImpl extends WaterfallMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Waterfall>) {
    super(arg, init)
    this.types.add(schema.Waterfall)
  }

  static readonly __mixins: Mixin[] = [WaterfallMixin, BodyOfWaterMixin];
}
WaterfallMixin.appliesTo = schema.Waterfall
WaterfallMixin.Class = WaterfallImpl

export const fromPointer = createFactory<Waterfall>([BodyOfWaterMixin, WaterfallMixin], { types: [schema.Waterfall] });
