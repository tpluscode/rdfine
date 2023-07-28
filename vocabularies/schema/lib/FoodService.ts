import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { ServiceMixin } from './Service.js';

export interface FoodService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Service<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    FoodService: Factory<Schema.FoodService>;
  }
}

export function FoodServiceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<FoodService & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class FoodServiceClass extends ServiceMixin(Resource) {
  }
  return FoodServiceClass as any
}
FoodServiceMixin.appliesTo = schema.FoodService
FoodServiceMixin.createFactory = (env: RdfineEnvironment) => createFactory<FoodService>([ServiceMixin, FoodServiceMixin], { types: [schema.FoodService] }, env)
