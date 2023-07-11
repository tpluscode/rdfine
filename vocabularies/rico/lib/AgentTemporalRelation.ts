import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { AgentToAgentRelationMixin } from './AgentToAgentRelation.js';
import { TemporalRelationMixin } from './TemporalRelation.js';

export interface AgentTemporalRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentToAgentRelation<D>, Rico.TemporalRelation<D>, rdfine.RdfResource<D> {
  agentTemporalRelationHasSource: Rico.Agent<D> | undefined;
  agentTemporalRelationHasTarget: Rico.Agent<D> | undefined;
  asConcernsActivity: Rico.Activity<D> | undefined;
}

export function AgentTemporalRelationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AgentTemporalRelation & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class AgentTemporalRelationClass extends TemporalRelationMixin(AgentToAgentRelationMixin(Resource)) {
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    agentTemporalRelationHasSource: Rico.Agent | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    agentTemporalRelationHasTarget: Rico.Agent | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Activity] })
    asConcernsActivity: Rico.Activity | undefined;
  }
  return AgentTemporalRelationClass as any
}
AgentTemporalRelationMixin.appliesTo = rico.AgentTemporalRelation

export const factory = (env: RdfineEnvironment) => createFactory<AgentTemporalRelation>([TemporalRelationMixin, AgentToAgentRelationMixin, AgentTemporalRelationMixin], { types: [rico.AgentTemporalRelation] }, env);
