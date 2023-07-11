import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface LegalService<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, rdfine.RdfResource<D> {
}

export function LegalServiceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<LegalService & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LegalServiceClass extends LocalBusinessMixin(Resource) {
  }
  return LegalServiceClass as any
}
LegalServiceMixin.appliesTo = schema.LegalService

export const factory = (env: RdfineEnvironment) => createFactory<LegalService>([LocalBusinessMixin, LegalServiceMixin], { types: [schema.LegalService] }, env);
