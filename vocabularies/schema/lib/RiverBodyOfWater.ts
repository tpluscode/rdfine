import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { BodyOfWaterMixin } from './BodyOfWater.js';

export interface RiverBodyOfWater<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BodyOfWater<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    RiverBodyOfWater: Factory<Schema.RiverBodyOfWater>;
  }
}

export function RiverBodyOfWaterMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<RiverBodyOfWater & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class RiverBodyOfWaterClass extends BodyOfWaterMixin(Resource) {
  }
  return RiverBodyOfWaterClass as any
}
RiverBodyOfWaterMixin.appliesTo = schema.RiverBodyOfWater
RiverBodyOfWaterMixin.createFactory = (env: RdfineEnvironment) => createFactory<RiverBodyOfWater>([BodyOfWaterMixin, RiverBodyOfWaterMixin], { types: [schema.RiverBodyOfWater] }, env)
