import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { CivicStructureMixin } from './CivicStructure.js';

export interface Bridge<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CivicStructure<D>, rdfine.RdfResource<D> {
}

declare global {
  interface SchemaVocabulary {
    Bridge: Factory<Schema.Bridge>;
  }
}

export function BridgeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Bridge & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BridgeClass extends CivicStructureMixin(Resource) {
  }
  return BridgeClass as any
}
BridgeMixin.appliesTo = schema.Bridge
BridgeMixin.createFactory = (env: RdfineEnvironment) => createFactory<Bridge>([CivicStructureMixin, BridgeMixin], { types: [schema.Bridge] }, env)
