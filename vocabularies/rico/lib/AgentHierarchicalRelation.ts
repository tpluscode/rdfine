import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { AgentToAgentRelationMixin } from './AgentToAgentRelation.js';

export interface AgentHierarchicalRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentToAgentRelation<D>, rdfine.RdfResource<D> {
  agentHierarchicalRelationHasSource: Rico.Agent<D> | undefined;
  agentHierarchicalRelationHasTarget: Rico.Agent<D> | undefined;
}

declare global {
  interface RicoVocabulary {
    AgentHierarchicalRelation: Factory<Rico.AgentHierarchicalRelation>;
  }
}

export function AgentHierarchicalRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AgentHierarchicalRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class AgentHierarchicalRelationClass extends AgentToAgentRelationMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    agentHierarchicalRelationHasSource: Rico.Agent | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    agentHierarchicalRelationHasTarget: Rico.Agent | undefined;
  }
  return AgentHierarchicalRelationClass as any
}
AgentHierarchicalRelationMixin.appliesTo = rico.AgentHierarchicalRelation
AgentHierarchicalRelationMixin.createFactory = (env: RdfineEnvironment) => createFactory<AgentHierarchicalRelation>([AgentToAgentRelationMixin, AgentHierarchicalRelationMixin], { types: [rico.AgentHierarchicalRelation] }, env)
