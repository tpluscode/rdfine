import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { AgentHierarchicalRelationMixin } from './AgentHierarchicalRelation';
import { AuthorityRelationMixin } from './AuthorityRelation';

export interface AgentControlRelation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.AgentHierarchicalRelation<D>, Rico.AuthorityRelation<D>, RdfResource<D> {
  agentControlRelationHasSource: Rico.Agent<D> | undefined;
  agentControlRelationHasTarget: Rico.Agent<D> | undefined;
}

export function AgentControlRelationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<AgentControlRelation> & RdfResourceCore> & Base {
  @namespace(rico)
  class AgentControlRelationClass extends AuthorityRelationMixin(AgentHierarchicalRelationMixin(Resource)) implements Partial<AgentControlRelation> {
    @property.resource({ implicitTypes: [rico.Agent] })
    agentControlRelationHasSource: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    agentControlRelationHasTarget: Rico.Agent | undefined;
  }
  return AgentControlRelationClass
}

class AgentControlRelationImpl extends AgentControlRelationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AgentControlRelation>) {
    super(arg, init)
    this.types.add(rico.AgentControlRelation)
  }

  static readonly __mixins: Mixin[] = [AgentControlRelationMixin, AgentHierarchicalRelationMixin, AuthorityRelationMixin];
}
AgentControlRelationMixin.appliesTo = rico.AgentControlRelation
AgentControlRelationMixin.Class = AgentControlRelationImpl

export const fromPointer = createFactory<AgentControlRelation>([AuthorityRelationMixin, AgentHierarchicalRelationMixin, AgentControlRelationMixin], { types: [rico.AgentControlRelation] });
