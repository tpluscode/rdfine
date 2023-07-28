import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { ThingMixin } from './Thing.js';

export interface Agent<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, rdfine.RdfResource<D> {
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

declare global {
  interface RicoVocabulary {
    Agent: Factory<Rico.Agent>;
  }
}

export function AgentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Agent & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class AgentClass extends ThingMixin(Resource) {
    @rdfine.property.resource({ implicitTypes: [rico.WorkRelation] })
    agentHasWorkRelation: Rico.WorkRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AgentToAgentRelation] })
    agentIsConnectedToAgentRelation: Rico.AgentToAgentRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AgentControlRelation] })
    agentIsSourceOfAgentControlRelation: Rico.AgentControlRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AgentHierarchicalRelation] })
    agentIsSourceOfAgentHierarchicalRelation: Rico.AgentHierarchicalRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AgentTemporalRelation] })
    agentIsSourceOfAgentTemporalRelation: Rico.AgentTemporalRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AuthorityRelation] })
    agentIsSourceOfAuthorityRelation: Rico.AuthorityRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.ManagementRelation] })
    agentIsSourceOfManagementRelation: Rico.ManagementRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordResourceHoldingRelation] })
    agentIsSourceOfRecordResourceHoldingRelation: Rico.RecordResourceHoldingRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AccumulationRelation] })
    agentIsTargetOfAccumulationRelation: Rico.AccumulationRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AgentControlRelation] })
    agentIsTargetOfAgentControlRelation: Rico.AgentControlRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AgentHierarchicalRelation] })
    agentIsTargetOfAgentHierarchicalRelation: Rico.AgentHierarchicalRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AgentOriginationRelation] })
    agentIsTargetOfAgentOriginationRelation: Rico.AgentOriginationRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AgentTemporalRelation] })
    agentIsTargetOfAgentTemporalRelation: Rico.AgentTemporalRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.CreationRelation] })
    agentIsTargetOfCreationRelation: Rico.CreationRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.MandateRelation] })
    agentIsTargetOfMandateRelation: Rico.MandateRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.PerformanceRelation] })
    agentIsTargetOfPerformanceRelation: Rico.PerformanceRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.ProvenanceRelation] })
    agentOrActivityIsTargetOfProvenanceRelation: Rico.ProvenanceRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Mandate] })
    authorizedBy: Rico.Mandate | undefined;
    @rdfine.property()
    authorizingMandate: RDF.Literal | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AgentName] })
    hasOrHadAgentName: Rico.AgentName | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    hasOrHadAuthorityOver: Rico.Thing | undefined;
    @rdfine.property.resource({ as: [AgentMixin] })
    hasOrHadController: Rico.Agent | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Place] })
    hasOrHadJurisdiction: Rico.Place | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Language] })
    hasOrHadLanguage: Rico.Language | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.LegalStatus] })
    hasOrHadLegalStatus: Rico.LegalStatus | undefined;
    @rdfine.property.resource({ as: [AgentMixin] })
    hasOrHadSubordinate: Rico.Agent | undefined;
    @rdfine.property.resource({ as: [AgentMixin] })
    hasOrHadWorkRelationWith: Rico.Agent | undefined;
    @rdfine.property.resource({ as: [AgentMixin] })
    hasSuccessor: Rico.Agent | undefined;
    @rdfine.property()
    history: RDF.Literal | undefined;
    @rdfine.property.resource()
    isAccumulatorOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource()
    isAddresseeOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource({ as: [AgentMixin] })
    isAgentAssociatedWithAgent: Rico.Agent | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.MandateRelation] })
    isAuthorizingAgentInMandateRelation: Rico.MandateRelation | undefined;
    @rdfine.property.resource()
    isCollectorOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource()
    isCreatorOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource({ as: [AgentMixin] })
    isOrWasControllerOf: Rico.Agent | undefined;
    @rdfine.property.resource()
    isOrWasHolderOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource()
    isOrWasManagerOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Rule] })
    isOrWasResponsibleForEnforcing: Rico.Rule | undefined;
    @rdfine.property.resource({ as: [AgentMixin] })
    isOrWasSubordinateTo: Rico.Agent | undefined;
    @rdfine.property.resource()
    isProvenanceOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordResource] })
    isPublisherOf: Rico.RecordResource | undefined;
    @rdfine.property.resource()
    isReceiverOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Rule] })
    isResponsibleForIssuing: Rico.Rule | undefined;
    @rdfine.property.resource()
    isSenderOf: Rico.Instantiation | Rico.RecordResource | undefined;
    @rdfine.property.resource()
    isSourceOf: Rico.RecordResource | Rico.Relation | undefined;
    @rdfine.property.resource({ as: [AgentMixin] })
    isSuccessorOf: Rico.Agent | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Activity] })
    performsOrPerformed: Rico.Activity | undefined;
  }
  return AgentClass as any
}
AgentMixin.appliesTo = rico.Agent
AgentMixin.createFactory = (env: RdfineEnvironment) => createFactory<Agent>([ThingMixin, AgentMixin], { types: [rico.Agent] }, env)
