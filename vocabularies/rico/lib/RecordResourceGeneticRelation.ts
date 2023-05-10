import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RecordResourceToRecordResourceRelationMixin } from './RecordResourceToRecordResourceRelation.js';

export interface RecordResourceGeneticRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.RecordResourceToRecordResourceRelation<D>, rdfine.RdfResource<D> {
  recordResourceGeneticRelationConnects: Rico.RecordResource<D> | undefined;
}

export function RecordResourceGeneticRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<RecordResourceGeneticRelation> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class RecordResourceGeneticRelationClass extends RecordResourceToRecordResourceRelationMixin(Resource) implements Partial<RecordResourceGeneticRelation> {
    @rdfine.property.resource({ implicitTypes: [rico.RecordResource] })
    recordResourceGeneticRelationConnects: Rico.RecordResource | undefined;
  }
  return RecordResourceGeneticRelationClass
}

class RecordResourceGeneticRelationImpl extends RecordResourceGeneticRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RecordResourceGeneticRelation>) {
    super(arg, init)
    this.types.add(rico.RecordResourceGeneticRelation)
  }

  static readonly __mixins: Mixin[] = [RecordResourceGeneticRelationMixin, RecordResourceToRecordResourceRelationMixin];
}
RecordResourceGeneticRelationMixin.appliesTo = rico.RecordResourceGeneticRelation
RecordResourceGeneticRelationMixin.Class = RecordResourceGeneticRelationImpl

export const fromPointer = createFactory<RecordResourceGeneticRelation>([RecordResourceToRecordResourceRelationMixin, RecordResourceGeneticRelationMixin], { types: [rico.RecordResourceGeneticRelation] });
