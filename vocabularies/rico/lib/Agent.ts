import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ThingMixin } from './Thing.js';

export interface Agent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, RdfResource<D> {
  agentHasWorkRelation: Rico.WorkRelation<D> | undefined;
  agentIsConnectedToAgentRelation: Rico.AgentToAgentRelation<D> | undefined;
  agentIsSourceOfAgentControlRelation: Rico.AgentControlRelation<D> | undefined;
  agentIsSourceOfAgentHierarchicalRelation: Rico.AgentHierarchicalRelation<D> | undefined;
  agentIsSourceOfAgentTemporalRelation: Rico.AgentTemporalRelation<D> | undefined;
  agentIsSourceOfAuthorityRelation: Rico.AuthorityRelation<D> | undefined;
  agentIsSourceOfManagementRelation: Rico.ManagementRelation<D> | undefined;
  agentIsSourceOfRecordResourceHoldingRelation: Rico.RecordResourceHoldingRelation<D> | undefined;
  agentIsTargetOfAccumulationRelation: Rico.AccumulationRelation<D> | undefined;
  agentIsTargetOfAgentControlRelation: Rico.AgentControlRelation<D> | undefined;
  agentIsTargetOfAgentHierarchicalRelation: Rico.AgentHierarchicalRelation<D> | undefined;
  agentIsTargetOfAgentOriginationRelation: Rico.AgentOriginationRelation<D> | undefined;
  agentIsTargetOfAgentTemporalRelation: Rico.AgentTemporalRelation<D> | undefined;
  agentIsTargetOfCreationRelation: Rico.CreationRelation<D> | undefined;
  agentIsTargetOfMandateRelation: Rico.MandateRelation<D> | undefined;
  agentIsTargetOfPerformanceRelation: Rico.PerformanceRelation<D> | undefined;
  agentOrActivityIsTargetOfProvenanceRelation: Rico.ProvenanceRelation<D> | undefined;
  authorizedBy: Rico.Mandate<D> | undefined;
  authorizingMandate: RDF.Literal | undefined;
  hasOrHadAgentName: Rico.AgentName<D> | undefined;
  hasOrHadAuthorityOver: Rico.Thing<D> | undefined;
  hasOrHadController: Rico.Agent<D> | undefined;
  hasOrHadJurisdiction: Rico.Place<D> | undefined;
  hasOrHadLanguage: Rico.Language<D> | undefined;
  hasOrHadLegalStatus: Rico.LegalStatus<D> | undefined;
  hasOrHadSubordinate: Rico.Agent<D> | undefined;
  hasOrHadWorkRelationWith: Rico.Agent<D> | undefined;
  hasSuccessor: Rico.Agent<D> | undefined;
  history: RDF.Literal | undefined;
  isAccumulatorOf: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  isAddresseeOf: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  isAgentAssociatedWithAgent: Rico.Agent<D> | undefined;
  isAuthorizingAgentInMandateRelation: Rico.MandateRelation<D> | undefined;
  isCollectorOf: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  isCreatorOf: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  isOrWasControllerOf: Rico.Agent<D> | undefined;
  isOrWasHolderOf: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  isOrWasManagerOf: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  isOrWasResponsibleForEnforcing: Rico.Rule<D> | undefined;
  isOrWasSubordinateTo: Rico.Agent<D> | undefined;
  isProvenanceOf: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  isPublisherOf: Rico.RecordResource<D> | undefined;
  isReceiverOf: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  isResponsibleForIssuing: Rico.Rule<D> | undefined;
  isSenderOf: Rico.Instantiation<D> | Rico.RecordResource<D> | undefined;
  isSourceOf: Rico.RecordResource<D> | Rico.Relation<D> | undefined;
  isSuccessorOf: Rico.Agent<D> | undefined;
  performsOrPerformed: Rico.Activity<D> | undefined;
}

export function AgentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Agent> & RdfResourceCore> & Base {
  @namespace(rico)
  class AgentClass extends ThingMixin(Resource) implements Partial<Agent> {
    @property.resource({ implicitTypes: [rico.WorkRelation] })
    agentHasWorkRelation: Rico.WorkRelation | undefined;
    @property.resource({ implicitTypes: [rico.AgentToAgentRelation] })
    agentIsConnectedToAgentRelation: Rico.AgentToAgentRelation | undefined;
    @property.resource({ implicitTypes: [rico.AgentControlRelation] })
    agentIsSourceOfAgentControlRelation: Rico.AgentControlRelation | undefined;
    @property.resource({ implicitTypes: [rico.AgentHierarchicalRelation] })
    agentIsSourceOfAgentHierarchicalRelation: Rico.AgentHierarchicalRelation | undefined;
    @property.resource({ implicitTypes: [rico.AgentTemporalRelation] })
    agentIsSourceOfAgentTemporalRelation: Rico.AgentTemporalRelation | undefined;
    @property.resource({ implicitTypes: [rico.AuthorityRelation] })
    agentIsSourceOfAuthorityRelation: Rico.AuthorityRelation | undefined;
    @property.resource({ implicitTypes: [rico.ManagementRelation] })
    agentIsSourceOfManagementRelation: Rico.ManagementRelation | undefined;
    @property.resource({ implicitTypes: [rico.RecordResourceHoldingRelation] })
    agentIsSourceOfRecordResourceHoldingRelation: Rico.RecordResourceHoldingRelation | undefined;
    @property.resource({ implicitTypes: [rico.AccumulationRelation] })
    agentIsTargetOfAccumulationRelation: Rico.AccumulationRelation | undefined;
    @property.resource({ implicitTypes: [rico.AgentControlRelation] })
    agentIsTargetOfAgentControlRelation: Rico.AgentControlRelation | undefined;
    @property.resource({ implicitTypes: [rico.AgentHierarchicalRelation] })
    agentIsTargetOfAgentHierarchicalRelation: Rico.AgentHierarchicalRelation | undefined;
    @property.resource({ implicitTypes: [rico.AgentOriginationRelation] })
    agentIsTargetOfAgentOriginationRelation: Rico.AgentOriginationRelation | undefined;
    @property.resource({ implicitTypes: [rico.AgentTemporalRelation] })
    agentIsTargetOfAgentTemporalRelation: Rico.AgentTemporalRelation | undefined;
    @property.resource({ implicitTypes: [rico.CreationRelation] })
    agentIsTargetOfCreationRelation: Rico.CreationRelation | undefined;
    @property.resource({ implicitTypes: [rico.MandateRelation] })
    agentIsTargetOfMandateRelation: Rico.MandateRelation | undefined;
    @property.resource({ implicitTypes: [rico.PerformanceRelation] })
    agentIsTargetOfPerformanceRelation: Rico.PerformanceRelation | undefined;
    @property.resource({ implicitTypes: [rico.ProvenanceRelation] })
    agentOrActivityIsTargetOfProvenanceRelation: Rico.ProvenanceRelation | undefined;
    @property.resource({ implicitTypes: [rico.Mandate] })
    authorizedBy: Rico.Mandate | undefined;
    @property()
    authorizingMandate: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [rico.AgentName] })
    hasOrHadAgentName: Rico.AgentName | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    hasOrHadAuthorityOver: Rico.Thing | undefined;
    @property.resource({ as: [AgentMixin] })
    hasOrHadController: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Place] })
    hasOrHadJurisdiction: Rico.Place | undefined;
    @property.resource({ implicitTypes: [rico.Language] })
    hasOrHadLanguage: Rico.Language | undefined;
    @property.resource({ implicitTypes: [rico.LegalStatus] })
    hasOrHadLegalStatus: Rico.LegalStatus | undefined;
    @property.resource({ as: [AgentMixin] })
    hasOrHadSubordinate: Rico.Agent | undefined;
    @property.resource({ as: [AgentMixin] })
    hasOrHadWorkRelationWith: Rico.Agent | undefined;
    @property.resource({ as: [AgentMixin] })
    hasSuccessor: Rico.Agent | undefined;
    @property()
    history: RDF.Literal | undefined;
    @property.resource()
    isAccumulatorOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @property.resource()
    isAddresseeOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @property.resource({ as: [AgentMixin] })
    isAgentAssociatedWithAgent: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.MandateRelation] })
    isAuthorizingAgentInMandateRelation: Rico.MandateRelation | undefined;
    @property.resource()
    isCollectorOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @property.resource()
    isCreatorOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @property.resource({ as: [AgentMixin] })
    isOrWasControllerOf: Rico.Agent | undefined;
    @property.resource()
    isOrWasHolderOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @property.resource()
    isOrWasManagerOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.Rule] })
    isOrWasResponsibleForEnforcing: Rico.Rule | undefined;
    @property.resource({ as: [AgentMixin] })
    isOrWasSubordinateTo: Rico.Agent | undefined;
    @property.resource()
    isProvenanceOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.RecordResource] })
    isPublisherOf: Rico.RecordResource | undefined;
    @property.resource()
    isReceiverOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.Rule] })
    isResponsibleForIssuing: Rico.Rule | undefined;
    @property.resource()
    isSenderOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @property.resource()
    isSourceOf: Rico.RecordResource | Rico.Relation | undefined;
    @property.resource({ as: [AgentMixin] })
    isSuccessorOf: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Activity] })
    performsOrPerformed: Rico.Activity | undefined;
  }
  return AgentClass
}

class AgentImpl extends AgentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Agent>) {
    super(arg, init)
    this.types.add(rico.Agent)
  }

  static readonly __mixins: Mixin[] = [AgentMixin, ThingMixin];
}
AgentMixin.appliesTo = rico.Agent
AgentMixin.Class = AgentImpl

export const fromPointer = createFactory<Agent>([ThingMixin, AgentMixin], { types: [rico.Agent] });
