import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { AgentToAgentRelationMixin } from './AgentToAgentRelation.js';

export interface AgentHierarchicalRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentToAgentRelation<D>, RdfResource<D> {
  agentHierarchicalRelationHasSource: Rico.Agent<D> | undefined;
  agentHierarchicalRelationHasTarget: Rico.Agent<D> | undefined;
}

export function AgentHierarchicalRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AgentHierarchicalRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class AgentHierarchicalRelationClass extends AgentToAgentRelationMixin(Resource) implements Partial<AgentHierarchicalRelation> {
    @property.resource({ implicitTypes: [rico.Agent] })
    agentHierarchicalRelationHasSource: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    agentHierarchicalRelationHasTarget: Rico.Agent | undefined;
  }
  return AgentHierarchicalRelationClass
}

class AgentHierarchicalRelationImpl extends AgentHierarchicalRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AgentHierarchicalRelation>) {
    super(arg, init)
    this.types.add(rico.AgentHierarchicalRelation)
  }

  static readonly __mixins: Mixin[] = [AgentHierarchicalRelationMixin, AgentToAgentRelationMixin];
}
AgentHierarchicalRelationMixin.appliesTo = rico.AgentHierarchicalRelation
AgentHierarchicalRelationMixin.Class = AgentHierarchicalRelationImpl

export const fromPointer = createFactory<AgentHierarchicalRelation>([AgentToAgentRelationMixin, AgentHierarchicalRelationMixin], { types: [rico.AgentHierarchicalRelation] });
