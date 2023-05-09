import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ThingMixin } from './Thing.js';

export interface Instantiation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Thing<D>, RdfResource<D> {
  authenticityNote: RDF.Literal | undefined;
  carrierExtent: RDF.Literal | undefined;
  conditionsOfAccess: RDF.Literal | undefined;
  conditionsOfUse: RDF.Literal | undefined;
  documents: Rico.Activity<D> | undefined;
  hasAccumulator: Rico.Agent<D> | undefined;
  hasAddressee: Rico.Agent<D> | undefined;
  hasCarrierType: Rico.CarrierType<D> | undefined;
  hasCollector: Rico.Agent<D> | undefined;
  hasCreator: Rico.Agent<D> | undefined;
  hasDerivedInstantiation: Rico.Instantiation<D> | undefined;
  hasExtent: Rico.Extent<D> | undefined;
  hasOrHadComponent: Rico.Instantiation<D> | undefined;
  hasOrHadHolder: Rico.Agent<D> | undefined;
  hasOrHadIntellectualPropertyRightsHolder: Rico.Group<D> | Rico.Person<D> | Rico.Position<D> | undefined;
  hasOrHadManager: Rico.Agent<D> | undefined;
  hasOrHadTitle: Rico.Title<D> | undefined;
  hasProductionTechniqueType: Rico.ProductionTechniqueType<D> | undefined;
  hasProvenance: Rico.Agent<D> | undefined;
  hasReceiver: Rico.Agent<D> | undefined;
  hasRepresentationType: Rico.RepresentationType<D> | undefined;
  hasSender: Rico.Agent<D> | undefined;
  history: RDF.Literal | undefined;
  instantiationExtent: RDF.Literal | undefined;
  instantiationIsConnectedToFunctionalEquivalenceRelation: Rico.FunctionalEquivalenceRelation<D> | undefined;
  instantiationIsConnectedToInstantiationRelation: Rico.InstantiationToInstantiationRelation<D> | undefined;
  instantiationIsSourceOfDerivationRelation: Rico.DerivationRelation<D> | undefined;
  instantiationIsSourceOfMigrationRelation: Rico.MigrationRelation<D> | undefined;
  instantiationIsTargetOfDerivationRelation: Rico.DerivationRelation<D> | undefined;
  instantiationIsTargetOfMigrationRelation: Rico.MigrationRelation<D> | undefined;
  instantiationIsTargetOfRecordResourceToInstantiationRelation: Rico.RecordResourceToInstantiationRelation<D> | undefined;
  instantiationStructure: RDF.Literal | undefined;
  integrity: RDF.Literal | undefined;
  isDerivedFromInstantiation: Rico.Instantiation<D> | undefined;
  isFunctionallyEquivalentTo: Rico.Instantiation<D> | undefined;
  isInstantiationAssociatedWithInstantiation: Rico.Instantiation<D> | undefined;
  isInstantiationOf: Rico.RecordResource<D> | undefined;
  isOrWasComponentOf: Rico.Instantiation<D> | undefined;
  migratedFrom: Rico.Instantiation<D> | undefined;
  migratedInto: Rico.Instantiation<D> | undefined;
  physicalCharacteristics: RDF.Literal | undefined;
  physicalOrLogicalExtent: RDF.Literal | undefined;
  productionTechnique: RDF.Literal | undefined;
  qualityOfRepresentation: RDF.Literal | undefined;
  recordResourceOrInstantiationIsSourceOfAccumulationRelation: Rico.AccumulationRelation<D> | undefined;
  recordResourceOrInstantiationIsSourceOfActivityDocumentationRelation: Rico.ActivityDocumentationRelation<D> | undefined;
  recordResourceOrInstantiationIsSourceOfAgentOriginationRelation: Rico.AgentOriginationRelation<D> | undefined;
  recordResourceOrInstantiationIsSourceOfCreationRelation: Rico.CreationRelation<D> | undefined;
  recordResourceOrInstantiationIsSourceOfProvenanceRelation: Rico.ProvenanceRelation<D> | undefined;
  recordResourceOrInstantiationIsTargetOfIntellectualPropertyRightsRelation: Rico.IntellectualPropertyRightsRelation<D> | undefined;
  recordResourceOrInstantiationIsTargetOfManagementRelation: Rico.ManagementRelation<D> | undefined;
  recordResourceOrInstantiationIsTargetOfRecordResourceHoldingRelation: Rico.RecordResourceHoldingRelation<D> | undefined;
  structure: RDF.Literal | undefined;
  title: RDF.Literal | undefined;
}

export function InstantiationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Instantiation> & RdfResourceCore> & Base {
  @namespace(rico)
  class InstantiationClass extends ThingMixin(Resource) implements Partial<Instantiation> {
    @property()
    authenticityNote: RDF.Literal | undefined;
    @property()
    carrierExtent: RDF.Literal | undefined;
    @property()
    conditionsOfAccess: RDF.Literal | undefined;
    @property()
    conditionsOfUse: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [rico.Activity] })
    documents: Rico.Activity | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasAccumulator: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasAddressee: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.CarrierType] })
    hasCarrierType: Rico.CarrierType | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasCollector: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasCreator: Rico.Agent | undefined;
    @property.resource({ as: [InstantiationMixin] })
    hasDerivedInstantiation: Rico.Instantiation | undefined;
    @property.resource({ implicitTypes: [rico.Extent] })
    hasExtent: Rico.Extent | undefined;
    @property.resource({ as: [InstantiationMixin] })
    hasOrHadComponent: Rico.Instantiation | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasOrHadHolder: Rico.Agent | undefined;
    @property.resource()
    hasOrHadIntellectualPropertyRightsHolder: Rico.Group | Rico.Person | Rico.Position | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasOrHadManager: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Title] })
    hasOrHadTitle: Rico.Title | undefined;
    @property.resource({ implicitTypes: [rico.ProductionTechniqueType] })
    hasProductionTechniqueType: Rico.ProductionTechniqueType | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasProvenance: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasReceiver: Rico.Agent | undefined;
    @property.resource({ implicitTypes: [rico.RepresentationType] })
    hasRepresentationType: Rico.RepresentationType | undefined;
    @property.resource({ implicitTypes: [rico.Agent] })
    hasSender: Rico.Agent | undefined;
    @property()
    history: RDF.Literal | undefined;
    @property()
    instantiationExtent: RDF.Literal | undefined;
    @property.resource({ implicitTypes: [rico.FunctionalEquivalenceRelation] })
    instantiationIsConnectedToFunctionalEquivalenceRelation: Rico.FunctionalEquivalenceRelation | undefined;
    @property.resource({ implicitTypes: [rico.InstantiationToInstantiationRelation] })
    instantiationIsConnectedToInstantiationRelation: Rico.InstantiationToInstantiationRelation | undefined;
    @property.resource({ implicitTypes: [rico.DerivationRelation] })
    instantiationIsSourceOfDerivationRelation: Rico.DerivationRelation | undefined;
    @property.resource({ implicitTypes: [rico.MigrationRelation] })
    instantiationIsSourceOfMigrationRelation: Rico.MigrationRelation | undefined;
    @property.resource({ implicitTypes: [rico.DerivationRelation] })
    instantiationIsTargetOfDerivationRelation: Rico.DerivationRelation | undefined;
    @property.resource({ implicitTypes: [rico.MigrationRelation] })
    instantiationIsTargetOfMigrationRelation: Rico.MigrationRelation | undefined;
    @property.resource({ implicitTypes: [rico.RecordResourceToInstantiationRelation] })
    instantiationIsTargetOfRecordResourceToInstantiationRelation: Rico.RecordResourceToInstantiationRelation | undefined;
    @property()
    instantiationStructure: RDF.Literal | undefined;
    @property()
    integrity: RDF.Literal | undefined;
    @property.resource({ as: [InstantiationMixin] })
    isDerivedFromInstantiation: Rico.Instantiation | undefined;
    @property.resource({ as: [InstantiationMixin] })
    isFunctionallyEquivalentTo: Rico.Instantiation | undefined;
    @property.resource({ as: [InstantiationMixin] })
    isInstantiationAssociatedWithInstantiation: Rico.Instantiation | undefined;
    @property.resource({ implicitTypes: [rico.RecordResource] })
    isInstantiationOf: Rico.RecordResource | undefined;
    @property.resource({ as: [InstantiationMixin] })
    isOrWasComponentOf: Rico.Instantiation | undefined;
    @property.resource({ as: [InstantiationMixin] })
    migratedFrom: Rico.Instantiation | undefined;
    @property.resource({ as: [InstantiationMixin] })
    migratedInto: Rico.Instantiation | undefined;
    @property()
    physicalCharacteristics: RDF.Literal | undefined;
    @property()
    physicalOrLogicalExtent: RDF.Literal | undefined;
    @property()
    productionTechnique: RDF.Literal | undefined;
    @property()
    qualityOfRepresentation: RDF.Literal | undefined;
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
    structure: RDF.Literal | undefined;
    @property()
    title: RDF.Literal | undefined;
  }
  return InstantiationClass
}

class InstantiationImpl extends InstantiationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Instantiation>) {
    super(arg, init)
    this.types.add(rico.Instantiation)
  }

  static readonly __mixins: Mixin[] = [InstantiationMixin, ThingMixin];
}
InstantiationMixin.appliesTo = rico.Instantiation
InstantiationMixin.Class = InstantiationImpl

export const fromPointer = createFactory<Instantiation>([ThingMixin, InstantiationMixin], { types: [rico.Instantiation] });
