import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { SportsActivityLocationMixin } from './SportsActivityLocation.js';

export interface TennisComplex<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SportsActivityLocation<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    TennisComplex: Factory<Schema.TennisComplex>;
  }
}

export function TennisComplexMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<TennisComplex & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TennisComplexClass extends SportsActivityLocationMixin(Resource) {
  }
  return TennisComplexClass as any
}
TennisComplexMixin.appliesTo = schema.TennisComplex
TennisComplexMixin.createFactory = (env: RdfineEnvironment) => createFactory<TennisComplex>([SportsActivityLocationMixin, TennisComplexMixin], { types: [schema.TennisComplex] }, env)
