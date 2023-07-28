import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface ProvenanceRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, rdfine.RdfResource<D> {
  provenanceRelationHasSource: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  provenanceRelationHasTarget: Rico.Activity<D> | Rico.Agent<D> | undefined;
}

declare global {
  interface RicoVocabulary {
    ProvenanceRelation: Factory<Rico.ProvenanceRelation>;
  }
}

export function ProvenanceRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ProvenanceRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class ProvenanceRelationClass extends RelationMixin(Resource) {
    @rdfine.property.resource()
    provenanceRelationHasSource: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource()
    provenanceRelationHasTarget: Rico.Activity | Rico.Agent | undefined;
  }
  return ProvenanceRelationClass as any
}
ProvenanceRelationMixin.appliesTo = rico.ProvenanceRelation
ProvenanceRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<ProvenanceRelation>([RelationMixin, ProvenanceRelationMixin], { types: [rico.ProvenanceRelation] }, env)
