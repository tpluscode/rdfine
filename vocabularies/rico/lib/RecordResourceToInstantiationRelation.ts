import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface RecordResourceToInstantiationRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, RdfResource<D> {
  recordResourceToInstantiationRelationHasSource: Rico.RecordResource<D> | undefined;
  recordResourceToInstantiationRelationHasTarget: Rico.Instantiation<D> | undefined;
}

export function RecordResourceToInstantiationRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RecordResourceToInstantiationRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class RecordResourceToInstantiationRelationClass extends RelationMixin(Resource) implements Partial<RecordResourceToInstantiationRelation> {
    @property.resource({ implicitTypes: [rico.RecordResource] })
    recordResourceToInstantiationRelationHasSource: Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.Instantiation] })
    recordResourceToInstantiationRelationHasTarget: Rico.Instantiation | undefined;
  }
  return RecordResourceToInstantiationRelationClass
}

class RecordResourceToInstantiationRelationImpl extends RecordResourceToInstantiationRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RecordResourceToInstantiationRelation>) {
    super(arg, init)
    this.types.add(rico.RecordResourceToInstantiationRelation)
  }

  static readonly __mixins: Mixin[] = [RecordResourceToInstantiationRelationMixin, RelationMixin];
}
RecordResourceToInstantiationRelationMixin.appliesTo = rico.RecordResourceToInstantiationRelation
RecordResourceToInstantiationRelationMixin.Class = RecordResourceToInstantiationRelationImpl

export const fromPointer = createFactory<RecordResourceToInstantiationRelation>([RelationMixin, RecordResourceToInstantiationRelationMixin], { types: [rico.RecordResourceToInstantiationRelation] });
