import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { AgentToAgentRelationMixin } from './AgentToAgentRelation.js';

export interface FamilyRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentToAgentRelation<D>, rdfine.RdfResource<D> {
  familyRelationConnects: Rico.Person<D> | undefined;
}

declare global {
  interface RicoVocabulary {
    FamilyRelation: Factory<Rico.FamilyRelation>;
  }
}

export function FamilyRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<FamilyRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class FamilyRelationClass extends AgentToAgentRelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    familyRelationConnects: Rico.Person | undefined;
  }
  return FamilyRelationClass as any
}
FamilyRelationMixin.appliesTo = rico.FamilyRelation
FamilyRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<FamilyRelation>([AgentToAgentRelationMixin, FamilyRelationMixin], { types: [rico.FamilyRelation] }, env)
