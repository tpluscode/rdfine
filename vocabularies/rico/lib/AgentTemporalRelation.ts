import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { AgentToAgentRelationMixin } from './AgentToAgentRelation';
import { TemporalRelationMixin } from './TemporalRelation';

export interface AgentTemporalRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentToAgentRelation<D>, Rico.TemporalRelation<D>, RdfResource<D> {
  agentTemporalRelationHasSource: Rico.Agent<D> | undefined;
  agentTemporalRelationHasTarget: Rico.Agent<D> | undefined;
  asConcernsActivity: Rico.Activity<D> | undefined;
}

export function AgentTemporalRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AgentTemporalRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class AgentTemporalRelationClass extends TemporalRelationMixin(AgentToAgentRelationMixin(Resource)) implements Partial<AgentTemporalRelation> {
    @property.resource({ implicitTypes: [rico.Agent] })
    agentTemporalRelationHasSource: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    agentTemporalRelationHasTarget: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Activity] })
    asConcernsActivity: Rico.Activity | undefined;
  }
  return AgentTemporalRelationClass
}

class AgentTemporalRelationImpl extends AgentTemporalRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AgentTemporalRelation>) {
    super(arg, init)
    this.types.add(rico.AgentTemporalRelation)
  }

  static readonly __mixins: Mixin[] = [AgentTemporalRelationMixin, AgentToAgentRelationMixin, TemporalRelationMixin];
}
AgentTemporalRelationMixin.appliesTo = rico.AgentTemporalRelation
AgentTemporalRelationMixin.Class = AgentTemporalRelationImpl

export const fromPointer = createFactory<AgentTemporalRelation>([TemporalRelationMixin, AgentToAgentRelationMixin, AgentTemporalRelationMixin], { types: [rico.AgentTemporalRelation] });
