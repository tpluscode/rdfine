import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { RecordResourceToRecordResourceRelationMixin } from './RecordResourceToRecordResourceRelation.js';

export interface RecordResourceGeneticRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.RecordResourceToRecordResourceRelation<D>, rdfine.RdfResource<D> {
  recordResourceGeneticRelationConnects: Rico.RecordResource<D> | undefined;
}

declare global {
  interface RicoVocabulary {
    RecordResourceGeneticRelation: Factory<Rico.RecordResourceGeneticRelation>;
  }
}

export function RecordResourceGeneticRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<RecordResourceGeneticRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class RecordResourceGeneticRelationClass extends RecordResourceToRecordResourceRelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.RecordResource] })
    recordResourceGeneticRelationConnects: Rico.RecordResource | undefined;
  }
  return RecordResourceGeneticRelationClass as any
}
RecordResourceGeneticRelationMixin.appliesTo = rico.RecordResourceGeneticRelation
RecordResourceGeneticRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<RecordResourceGeneticRelation>([RecordResourceToRecordResourceRelationMixin, RecordResourceGeneticRelationMixin], { types: [rico.RecordResourceGeneticRelation] }, env)
