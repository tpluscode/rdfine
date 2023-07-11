import * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Rico from '../index.js';
import { ThingMixin } from './Thing.js';

export interface RecordResource<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, rdfine.RdfResource<D> {
  authenticityNote: RDF.Literal | undefined;
  classification: RDF.Literal | undefined;
  conditionsOfAccess: RDF.Literal | undefined;
  conditionsOfUse: RDF.Literal | undefined;
  describesOrDescribed: Rico.Thing<D> | undefined;
  documents: Rico.Activity<D> | undefined;
  expressesOrExpressed: Rico.Rule<D> | undefined;
  hasAccumulator: Rico.Agent<D> | undefined;
  hasAddressee: Rico.Agent<D> | undefined;
  hasCollector: Rico.Agent<D> | undefined;
  hasCopy: Rico.RecordResource<D> | undefined;
  hasCreator: Rico.Agent<D> | undefined;
  hasExtent: Rico.Extent<D> | undefined;
  hasGeneticLinkToRecordResource: Rico.RecordResource<D> | undefined;
  hasInstantiation: Rico.Instantiation<D> | undefined;
  hasOrHadHolder: Rico.Agent<D> | undefined;
  hasOrHadIntellectualPropertyRightsHolder: Rico.Group<D> | Rico.Person<D> | Rico.Position<D> | undefined;
  hasOrHadMainSubject: Rico.Thing<D> | undefined;
  hasOrHadManager: Rico.Agent<D> | undefined;
  hasOrHadSubject: Rico.Thing<D> | undefined;
  hasOrHadTitle: Rico.Title<D> | undefined;
  hasProvenance: Rico.Agent<D> | undefined;
  hasPublisher: Rico.Agent<D> | undefined;
  hasReceiver: Rico.Agent<D> | undefined;
  hasReply: Rico.RecordResource<D> | undefined;
  hasSender: Rico.Agent<D> | undefined;
  hasSource: Rico.Agent<D> | Rico.RecordResource<D> | undefined;
  history: RDF.Literal | undefined;
  integrity: RDF.Literal | undefined;
  isCopyOf: Rico.RecordResource<D> | undefined;
  isRecordResourceAssociatedWithRecordResource: Rico.RecordResource<D> | undefined;
  isReplyTo: Rico.RecordResource<D> | undefined;
  isSourceOf: Rico.RecordResource<D> | Rico.Relation<D> | undefined;
  physicalOrLogicalExtent: RDF.Literal | undefined;
  publicationDate: RDF.Literal | undefined;
  recordResourceExtent: RDF.Literal | undefined;
  recordResourceIsConnectedToRecordResourceGeneticRelation: Rico.RecordResourceGeneticRelation<D> | undefined;
  recordResourceIsConnectedToRecordResourceRelation: Rico.RecordResourceToRecordResourceRelation<D> | undefined;
  recordResourceIsSourceOfRecordResourceToInstantiationRelation: Rico.RecordResourceToInstantiationRelation<D> | undefined;
  recordResourceOrInstantiationIsSourceOfAccumulationRelation: Rico.AccumulationRelation<D> | undefined;
  recordResourceOrInstantiationIsSourceOfActivityDocumentationRelation: Rico.ActivityDocumentationRelation<D> | undefined;
  recordResourceOrInstantiationIsSourceOfAgentOriginationRelation: Rico.AgentOriginationRelation<D> | undefined;
  recordResourceOrInstantiationIsSourceOfCreationRelation: Rico.CreationRelation<D> | undefined;
  recordResourceOrInstantiationIsSourceOfProvenanceRelation: Rico.ProvenanceRelation<D> | undefined;
  recordResourceOrInstantiationIsTargetOfIntellectualPropertyRightsRelation: Rico.IntellectualPropertyRightsRelation<D> | undefined;
  recordResourceOrInstantiationIsTargetOfManagementRelation: Rico.ManagementRelation<D> | undefined;
  recordResourceOrInstantiationIsTargetOfRecordResourceHoldingRelation: Rico.RecordResourceHoldingRelation<D> | undefined;
  recordResourceStructure: RDF.Literal | undefined;
  scopeAndContent: RDF.Literal | undefined;
  source: RDF.Literal | undefined;
  structure: RDF.Literal | undefined;
  title: RDF.Literal | undefined;
}

export function RecordResourceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<RecordResource & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class RecordResourceClass extends ThingMixin(Resource) {
    @rdfine.property()
    authenticityNote: RDF.Literal | undefined;
    @rdfine.property()
    classification: RDF.Literal | undefined;
    @rdfine.property()
    conditionsOfAccess: RDF.Literal | undefined;
    @rdfine.property()
    conditionsOfUse: RDF.Literal | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    describesOrDescribed: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Activity] })
    documents: Rico.Activity | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Rule] })
    expressesOrExpressed: Rico.Rule | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    hasAccumulator: Rico.Agent | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    hasAddressee: Rico.Agent | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    hasCollector: Rico.Agent | undefined;
    @rdfine.property.resource({ as: [RecordResourceMixin] })
    hasCopy: Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    hasCreator: Rico.Agent | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Extent] })
    hasExtent: Rico.Extent | undefined;
    @rdfine.property.resource({ as: [RecordResourceMixin] })
    hasGeneticLinkToRecordResource: Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Instantiation] })
    hasInstantiation: Rico.Instantiation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    hasOrHadHolder: Rico.Agent | undefined;
    @rdfine.property.resource()
    hasOrHadIntellectualPropertyRightsHolder: Rico.Group | Rico.Person | Rico.Position | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    hasOrHadMainSubject: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    hasOrHadManager: Rico.Agent | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Thing] })
    hasOrHadSubject: Rico.Thing | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Title] })
    hasOrHadTitle: Rico.Title | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    hasProvenance: Rico.Agent | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    hasPublisher: Rico.Agent | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    hasReceiver: Rico.Agent | undefined;
    @rdfine.property.resource({ as: [RecordResourceMixin] })
    hasReply: Rico.RecordResource | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.Agent] })
    hasSender: Rico.Agent | undefined;
    @rdfine.property.resource()
    hasSource: Rico.Agent | Rico.RecordResource | undefined;
    @rdfine.property()
    history: RDF.Literal | undefined;
    @rdfine.property()
    integrity: RDF.Literal | undefined;
    @rdfine.property.resource({ as: [RecordResourceMixin] })
    isCopyOf: Rico.RecordResource | undefined;
    @rdfine.property.resource({ as: [RecordResourceMixin] })
    isRecordResourceAssociatedWithRecordResource: Rico.RecordResource | undefined;
    @rdfine.property.resource({ as: [RecordResourceMixin] })
    isReplyTo: Rico.RecordResource | undefined;
    @rdfine.property.resource()
    isSourceOf: Rico.RecordResource | Rico.Relation | undefined;
    @rdfine.property()
    physicalOrLogicalExtent: RDF.Literal | undefined;
    @rdfine.property()
    publicationDate: RDF.Literal | undefined;
    @rdfine.property()
    recordResourceExtent: RDF.Literal | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordResourceGeneticRelation] })
    recordResourceIsConnectedToRecordResourceGeneticRelation: Rico.RecordResourceGeneticRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordResourceToRecordResourceRelation] })
    recordResourceIsConnectedToRecordResourceRelation: Rico.RecordResourceToRecordResourceRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordResourceToInstantiationRelation] })
    recordResourceIsSourceOfRecordResourceToInstantiationRelation: Rico.RecordResourceToInstantiationRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AccumulationRelation] })
    recordResourceOrInstantiationIsSourceOfAccumulationRelation: Rico.AccumulationRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.ActivityDocumentationRelation] })
    recordResourceOrInstantiationIsSourceOfActivityDocumentationRelation: Rico.ActivityDocumentationRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.AgentOriginationRelation] })
    recordResourceOrInstantiationIsSourceOfAgentOriginationRelation: Rico.AgentOriginationRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.CreationRelation] })
    recordResourceOrInstantiationIsSourceOfCreationRelation: Rico.CreationRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.ProvenanceRelation] })
    recordResourceOrInstantiationIsSourceOfProvenanceRelation: Rico.ProvenanceRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.IntellectualPropertyRightsRelation] })
    recordResourceOrInstantiationIsTargetOfIntellectualPropertyRightsRelation: Rico.IntellectualPropertyRightsRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.ManagementRelation] })
    recordResourceOrInstantiationIsTargetOfManagementRelation: Rico.ManagementRelation | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordResourceHoldingRelation] })
    recordResourceOrInstantiationIsTargetOfRecordResourceHoldingRelation: Rico.RecordResourceHoldingRelation | undefined;
    @rdfine.property()
    recordResourceStructure: RDF.Literal | undefined;
    @rdfine.property()
    scopeAndContent: RDF.Literal | undefined;
    @rdfine.property()
    source: RDF.Literal | undefined;
    @rdfine.property()
    structure: RDF.Literal | undefined;
    @rdfine.property()
    title: RDF.Literal | undefined;
  }
  return RecordResourceClass as any
}
RecordResourceMixin.appliesTo = rico.RecordResource

export const factory = (env: RdfineEnvironment) => createFactory<RecordResource>([ThingMixin, RecordResourceMixin], { types: [rico.RecordResource] }, env);
