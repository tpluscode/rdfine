import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { AgentToAgentRelationMixin } from './AgentToAgentRelation.js';

export interface KnowingOfRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentToAgentRelation<D>, rdfine.RdfResource<D> {
  knowingOfRelationHasSource: Rico.Person<D> | undefined;
  knowingOfRelationHasTarget: Rico.Person<D> | undefined;
}

declare global {
  interface RicoVocabulary {
    KnowingOfRelation: Factory<Rico.KnowingOfRelation>;
  }
}

export function KnowingOfRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<KnowingOfRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class KnowingOfRelationClass extends AgentToAgentRelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    knowingOfRelationHasSource: Rico.Person | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Person] })
    knowingOfRelationHasTarget: Rico.Person | undefined;
  }
  return KnowingOfRelationClass as any
}
KnowingOfRelationMixin.appliesTo = rico.KnowingOfRelation
KnowingOfRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<KnowingOfRelation>([AgentToAgentRelationMixin, KnowingOfRelationMixin], { types: [rico.KnowingOfRelation] }, env)
