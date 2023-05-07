import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { RelationMixin } from './Relation.js';

export interface AgentToAgentRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Relation<D>, RdfResource<D> {
  agentRelationConnects: Rico.Agent<D> | undefined;
}

export function AgentToAgentRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AgentToAgentRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class AgentToAgentRelationClass extends RelationMixin(Resource) implements Partial<AgentToAgentRelation> {
    @property.resource({ implicitTypes: [rico.Agent] })
    agentRelationConnects: Rico.Agent | undefined;
  }
  return AgentToAgentRelationClass
}

class AgentToAgentRelationImpl extends AgentToAgentRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AgentToAgentRelation>) {
    super(arg, init)
    this.types.add(rico.AgentToAgentRelation)
  }

  static readonly __mixins: Mixin[] = [AgentToAgentRelationMixin, RelationMixin];
}
AgentToAgentRelationMixin.appliesTo = rico.AgentToAgentRelation
AgentToAgentRelationMixin.Class = AgentToAgentRelationImpl

export const fromPointer = createFactory<AgentToAgentRelation>([RelationMixin, AgentToAgentRelationMixin], { types: [rico.AgentToAgentRelation] });
