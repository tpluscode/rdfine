import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface ProvenanceRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, rdfine.RdfResource<D> {
  provenanceRelationHasSource: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  provenanceRelationHasTarget: Rico.Activity<D> | Rico.Agent<D> | undefined;
}

export function ProvenanceRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ProvenanceRelation> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class ProvenanceRelationClass extends RelationMixin(Resource) implements Partial<ProvenanceRelation> {
    @rdfine.property.resource()
    provenanceRelationHasSource: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource()
    provenanceRelationHasTarget: Rico.Activity | Rico.Agent | undefined;
  }
  return ProvenanceRelationClass
}

class ProvenanceRelationImpl extends ProvenanceRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ProvenanceRelation>) {
    super(arg, init)
    this.types.add(rico.ProvenanceRelation)
  }

  static readonly __mixins: Mixin[] = [ProvenanceRelationMixin, RelationMixin];
}
ProvenanceRelationMixin.appliesTo = rico.ProvenanceRelation
ProvenanceRelationMixin.Class = ProvenanceRelationImpl

export const fromPointer = createFactory<ProvenanceRelation>([RelationMixin, ProvenanceRelationMixin], { types: [rico.ProvenanceRelation] });
