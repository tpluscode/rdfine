import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { BodyOfWaterMixin } from './BodyOfWater';

export interface Waterfall<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BodyOfWater<D>, RdfResource<D> {
}

export function WaterfallMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Waterfall> & RdfResourceCore> & Base {
  @namespace(schema)
  class WaterfallClass extends BodyOfWaterMixin(Resource) implements Partial<Waterfall> {
  }
  return WaterfallClass
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
