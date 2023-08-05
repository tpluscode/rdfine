import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { ActionMixin } from './Action.js';

export interface AssessAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Action<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    AssessAction: Factory<Schema.AssessAction>;
  }
}

export function AssessActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AssessAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AssessActionClass extends ActionMixin(Resource) {
  }
  return AssessActionClass as any
}
AssessActionMixin.appliesTo = schema.AssessAction
AssessActionMixin.createFactory = (env: RdfineEnvironment) => createFactory<AssessAction>([ActionMixin, AssessActionMixin], { types: [schema.AssessAction] }, env)
