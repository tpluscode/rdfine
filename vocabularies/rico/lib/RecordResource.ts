import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ThingMixin } from './Thing.js';

export interface RecordResource<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, RdfResource<D> {
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

export function RecordResourceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RecordResource> & RdfResourceCore> & Base {
  @namespace(rico)
  class RecordResourceClass extends ThingMixin(Resource) implements Partial<RecordResource> {
    @property()
    authenticityNote: RDF.Literal | undefined;
    @property()
    classification: RDF.Literal | undefined;
    @property()
    conditionsOfAccess: RDF.Literal | undefined;
    @property()
    conditionsOfUse: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    describesOrDescribed: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Activity] })
    documents: Rico.Activity | undefined;
    @property.resource({ implicitTypes: [rico.Rule] })
    expressesOrExpressed: Rico.Rule | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasAccumulator: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasAddressee: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasCollector: Rico.Agent | undefined;
    @property.resource({ as: [RecordResourceMixin] })
    hasCopy: Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasCreator: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Extent] })
    hasExtent: Rico.Extent | undefined;
    @property.resource({ as: [RecordResourceMixin] })
    hasGeneticLinkToRecordResource: Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.Instantiation] })
    hasInstantiation: Rico.Instantiation | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasOrHadHolder: Rico.Agent | undefined;
    @property.resource()
    hasOrHadIntellectualPropertyRightsHolder: Rico.Group | Rico.Person | Rico.Position | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    hasOrHadMainSubject: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasOrHadManager: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Thing] })
    hasOrHadSubject: Rico.Thing | undefined;
    @property.resource({ implicitTypes: [rico.Title] })
    hasOrHadTitle: Rico.Title | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasProvenance: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasPublisher: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasReceiver: Rico.Agent | undefined;
    @property.resource({ as: [RecordResourceMixin] })
    hasReply: Rico.RecordResource | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasSender: Rico.Agent | undefined;
    @property.resource()
    hasSource: Rico.Agent | Rico.RecordResource | undefined;
    @property()
    history: RDF.Literal | undefined;
    @property()
    integrity: RDF.Literal | undefined;
    @property.resource({ as: [RecordResourceMixin] })
    isCopyOf: Rico.RecordResource | undefined;
    @property.resource({ as: [RecordResourceMixin] })
    isRecordResourceAssociatedWithRecordResource: Rico.RecordResource | undefined;
    @property.resource({ as: [RecordResourceMixin] })
    isReplyTo: Rico.RecordResource | undefined;
    @property.resource()
    isSourceOf: Rico.RecordResource | Rico.Relation | undefined;
    @property()
    physicalOrLogicalExtent: RDF.Literal | undefined;
    @property()
    publicationDate: RDF.Literal | undefined;
    @property()
    recordResourceExtent: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [rico.RecordResourceGeneticRelation] })
    recordResourceIsConnectedToRecordResourceGeneticRelation: Rico.RecordResourceGeneticRelation | undefined;
    @property.resource({ implicitTypes: [rico.RecordResourceToRecordResourceRelation] })
    recordResourceIsConnectedToRecordResourceRelation: Rico.RecordResourceToRecordResourceRelation | undefined;
    @property.resource({ implicitTypes: [rico.RecordResourceToInstantiationRelation] })
    recordResourceIsSourceOfRecordResourceToInstantiationRelation: Rico.RecordResourceToInstantiationRelation | undefined;
    @property.resource({ implicitTypes: [rico.AccumulationRelation] })
    recordResourceOrInstantiationIsSourceOfAccumulationRelation: Rico.AccumulationRelation | undefined;
    @property.resource({ implicitTypes: [rico.ActivityDocumentationRelation] })
    recordResourceOrInstantiationIsSourceOfActivityDocumentationRelation: Rico.ActivityDocumentationRelation | undefined;
    @property.resource({ implicitTypes: [rico.AgentOriginationRelation] })
    recordResourceOrInstantiationIsSourceOfAgentOriginationRelation: Rico.AgentOriginationRelation | undefined;
    @property.resource({ implicitTypes: [rico.CreationRelation] })
    recordResourceOrInstantiationIsSourceOfCreationRelation: Rico.CreationRelation | undefined;
    @property.resource({ implicitTypes: [rico.ProvenanceRelation] })
    recordResourceOrInstantiationIsSourceOfProvenanceRelation: Rico.ProvenanceRelation | undefined;
    @property.resource({ implicitTypes: [rico.IntellectualPropertyRightsRelation] })
    recordResourceOrInstantiationIsTargetOfIntellectualPropertyRightsRelation: Rico.IntellectualPropertyRightsRelation | undefined;
    @property.resource({ implicitTypes: [rico.ManagementRelation] })
    recordResourceOrInstantiationIsTargetOfManagementRelation: Rico.ManagementRelation | undefined;
    @property.resource({ implicitTypes: [rico.RecordResourceHoldingRelation] })
    recordResourceOrInstantiationIsTargetOfRecordResourceHoldingRelation: Rico.RecordResourceHoldingRelation | undefined;
    @property()
    recordResourceStructure: RDF.Literal | undefined;
    @property()
    scopeAndContent: RDF.Literal | undefined;
    @property()
    source: RDF.Literal | undefined;
    @property()
    structure: RDF.Literal | undefined;
    @property()
    title: RDF.Literal | undefined;
  }
  return RecordResourceClass
}

class RecordResourceImpl extends RecordResourceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RecordResource>) {
    super(arg, init)
    this.types.add(rico.RecordResource)
  }

  static readonly __mixins: Mixin[] = [RecordResourceMixin, ThingMixin];
}
RecordResourceMixin.appliesTo = rico.RecordResource
RecordResourceMixin.Class = RecordResourceImpl

export const fromPointer = createFactory<RecordResource>([ThingMixin, RecordResourceMixin], { types: [rico.RecordResource] });
