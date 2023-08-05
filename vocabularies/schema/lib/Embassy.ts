import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { GovernmentBuildingMixin } from './GovernmentBuilding.js';

export interface Embassy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.GovernmentBuilding<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    Embassy: Factory<Schema.Embassy>;
  }
}

export function EmbassyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Embassy & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class EmbassyClass extends GovernmentBuildingMixin(Resource) {
  }
  return EmbassyClass as any
}
EmbassyMixin.appliesTo = schema.Embassy
EmbassyMixin.createFactory = (env: RdfineEnvironment) => createFactory<Embassy>([GovernmentBuildingMixin, EmbassyMixin], { types: [schema.Embassy] }, env)
