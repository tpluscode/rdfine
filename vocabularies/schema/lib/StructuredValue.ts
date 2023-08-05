import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface StructuredValue<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    StructuredValue: Factory<Schema.StructuredValue>;
  }
}

export function StructuredValueMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<StructuredValue & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class StructuredValueClass extends IntangibleMixin(Resource) {
  }
  return StructuredValueClass as any
}
StructuredValueMixin.appliesTo = schema.StructuredValue
StructuredValueMixin.createFactory = (env: RdfineEnvironment) => createFactory<StructuredValue>([IntangibleMixin, StructuredValueMixin], { types: [schema.StructuredValue] }, env)
