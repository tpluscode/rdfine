import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { BodyOfWaterMixin } from './BodyOfWater.js';

export interface SeaBodyOfWater<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BodyOfWater<D>, RdfResource<D> {
}

export function SeaBodyOfWaterMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SeaBodyOfWater> & RdfResourceCore> & Base {
  @namespace(schema)
  class SeaBodyOfWaterClass extends BodyOfWaterMixin(Resource) implements Partial<SeaBodyOfWater> {
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

export const fromPointer = createFactory<SeaBodyOfWater>([BodyOfWaterMixin, SeaBodyOfWaterMixin], { types: [schema.SeaBodyOfWater] });
