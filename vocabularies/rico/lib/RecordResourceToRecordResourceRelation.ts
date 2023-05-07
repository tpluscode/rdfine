import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface RecordResourceToRecordResourceRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, RdfResource<D> {
  recordResourceRelationConnects: Rico.RecordResource<D> | undefined;
}

export function RecordResourceToRecordResourceRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RecordResourceToRecordResourceRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class RecordResourceToRecordResourceRelationClass extends RelationMixin(Resource) implements Partial<RecordResourceToRecordResourceRelation> {
    @property.resource({ implicitTypes: [rico.RecordResource] })
    recordResourceRelationConnects: Rico.RecordResource | undefined;
  }
  return RecordResourceToRecordResourceRelationClass
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
