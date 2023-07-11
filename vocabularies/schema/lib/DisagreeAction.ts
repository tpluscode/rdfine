import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { ReactActionMixin } from './ReactAction.js';

export interface DisagreeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ReactAction<D>, rdfine.RdfResource<D> {
}

export function DisagreeActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<DisagreeAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DisagreeActionClass extends ReactActionMixin(Resource) {
  }
  return DisagreeActionClass as any
}
DisagreeActionMixin.appliesTo = schema.DisagreeAction

export const factory = (env: RdfineEnvironment) => createFactory<DisagreeAction>([ReactActionMixin, DisagreeActionMixin], { types: [schema.DisagreeAction] }, env);
