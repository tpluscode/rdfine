import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface RecordResourceToRecordResourceRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, rdfine.RdfResource<D> {
  recordResourceRelationConnects: Rico.RecordResource<D> | undefined;
}

export function RecordResourceToRecordResourceRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<RecordResourceToRecordResourceRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class RecordResourceToRecordResourceRelationClass extends RelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.RecordResource] })
    recordResourceRelationConnects: Rico.RecordResource | undefined;
  }
  return RecordResourceToRecordResourceRelationClass as any
}

class RecordResourceToRecordResourceRelationImpl extends RecordResourceToRecordResourceRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RecordResourceToRecordResourceRelation>) {
    super(arg, init)
    this.types.add(rico.RecordResourceToRecordResourceRelation)
  }

  static readonly __mixins: Mixin[] = [RecordResourceToRecordResourceRelationMixin, RelationMixin];
}
RecordResourceToRecordResourceRelationMixin.appliesTo = rico.RecordResourceToRecordResourceRelation
RecordResourceToRecordResourceRelationMixin.Class = RecordResourceToRecordResourceRelationImpl

export const fromPointer = createFactory<RecordResourceToRecordResourceRelation>([RelationMixin, RecordResourceToRecordResourceRelationMixin], { types: [rico.RecordResourceToRecordResourceRelation] });
