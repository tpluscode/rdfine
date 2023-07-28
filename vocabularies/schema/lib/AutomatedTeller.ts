import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { FinancialServiceMixin } from './FinancialService.js';

export interface AutomatedTeller<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.FinancialService<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    AutomatedTeller: Factory<Schema.AutomatedTeller>;
  }
}

export function AutomatedTellerMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AutomatedTeller & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AutomatedTellerClass extends FinancialServiceMixin(Resource) {
  }
  return AutomatedTellerClass as any
}
AutomatedTellerMixin.appliesTo = schema.AutomatedTeller
AutomatedTellerMixin.createFactory = (env: RdfineEnvironment) => createFactory<AutomatedTeller>([FinancialServiceMixin, AutomatedTellerMixin], { types: [schema.AutomatedTeller] }, env)
