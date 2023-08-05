import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface RecordResourceToRecordResourceRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, rdfine.RdfResource<D> {
  recordResourceRelationConnects: Rico.RecordResource<D> | undefined;
}

declare global {
  interface RicoVocabulary {
    RecordResourceToRecordResourceRelation: Factory<Rico.RecordResourceToRecordResourceRelation>;
  }
}

export function RecordResourceToRecordResourceRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<RecordResourceToRecordResourceRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class RecordResourceToRecordResourceRelationClass extends RelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.RecordResource] })
    recordResourceRelationConnects: Rico.RecordResource | undefined;
  }
  return RecordResourceToRecordResourceRelationClass as any
}
RecordResourceToRecordResourceRelationMixin.appliesTo = rico.RecordResourceToRecordResourceRelation
RecordResourceToRecordResourceRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<RecordResourceToRecordResourceRelation>([RelationMixin, RecordResourceToRecordResourceRelationMixin], { types: [rico.RecordResourceToRecordResourceRelation] }, env)
