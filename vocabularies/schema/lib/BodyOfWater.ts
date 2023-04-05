import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LandformMixin } from './Landform';

export interface BodyOfWater<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Landform<D>, RdfResource<D> {
}

export function BodyOfWaterMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BodyOfWater> & RdfResourceCore> & Base {
  @namespace(schema)
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
