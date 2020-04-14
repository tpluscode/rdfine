import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface SoftwareApplication extends Schema.CreativeWork, RdfResource {
  applicationCategory: string;
  applicationCategoryTerm: RDF.NamedNode;
  applicationSubCategory: string;
  applicationSubCategoryTerm: RDF.NamedNode;
  applicationSuite: string;
  availableOnDevice: string;
  countriesNotSupported: string;
  countriesSupported: string;
  device: string;
  downloadUrl: RDF.NamedNode;
  featureList: string;
  featureListTerm: RDF.NamedNode;
  fileSize: string;
  installUrl: RDF.NamedNode;
  memoryRequirements: string;
  memoryRequirementsTerm: RDF.NamedNode;
  operatingSystem: string;
  permissions: string;
  processorRequirements: string;
  releaseNotes: string;
  releaseNotesTerm: RDF.NamedNode;
  requirements: string;
  requirementsTerm: RDF.NamedNode;
  screenshot: Schema.ImageObject;
  softwareAddOn: Schema.SoftwareApplication;
  softwareHelp: Schema.CreativeWork;
  softwareRequirements: string;
  softwareRequirementsTerm: RDF.NamedNode;
  softwareVersion: string;
  storageRequirements: string;
  storageRequirementsTerm: RDF.NamedNode;
  supportingData: Schema.DataFeed;
}

export default function SoftwareApplicationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SoftwareApplicationClass extends CreativeWorkMixin(Resource) implements SoftwareApplication {
    @property.literal()
    applicationCategory!: string;
    @property({ path: schema.applicationCategory })
    applicationCategoryTerm!: RDF.NamedNode;
    @property.literal()
    applicationSubCategory!: string;
    @property({ path: schema.applicationSubCategory })
    applicationSubCategoryTerm!: RDF.NamedNode;
    @property.literal()
    applicationSuite!: string;
    @property.literal()
    availableOnDevice!: string;
    @property.literal()
    countriesNotSupported!: string;
    @property.literal()
    countriesSupported!: string;
    @property.literal()
    device!: string;
    @property()
    downloadUrl!: RDF.NamedNode;
    @property.literal()
    featureList!: string;
    @property({ path: schema.featureList })
    featureListTerm!: RDF.NamedNode;
    @property.literal()
    fileSize!: string;
    @property()
    installUrl!: RDF.NamedNode;
    @property.literal()
    memoryRequirements!: string;
    @property({ path: schema.memoryRequirements })
    memoryRequirementsTerm!: RDF.NamedNode;
    @property.literal()
    operatingSystem!: string;
    @property.literal()
    permissions!: string;
    @property.literal()
    processorRequirements!: string;
    @property.literal()
    releaseNotes!: string;
    @property({ path: schema.releaseNotes })
    releaseNotesTerm!: RDF.NamedNode;
    @property.literal()
    requirements!: string;
    @property({ path: schema.requirements })
    requirementsTerm!: RDF.NamedNode;
    @property.resource()
    screenshot!: Schema.ImageObject;
    @property.resource()
    softwareAddOn!: Schema.SoftwareApplication;
    @property.resource()
    softwareHelp!: Schema.CreativeWork;
    @property.literal()
    softwareRequirements!: string;
    @property({ path: schema.softwareRequirements })
    softwareRequirementsTerm!: RDF.NamedNode;
    @property.literal()
    softwareVersion!: string;
    @property.literal()
    storageRequirements!: string;
    @property({ path: schema.storageRequirements })
    storageRequirementsTerm!: RDF.NamedNode;
    @property.resource()
    supportingData!: Schema.DataFeed;
  }
  return SoftwareApplicationClass
}

class SoftwareApplicationImpl extends SoftwareApplicationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SoftwareApplication>) {
    super(arg, init)
    this.types.add(schema.SoftwareApplication)
  }
}
SoftwareApplicationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SoftwareApplication)
SoftwareApplicationMixin.Class = SoftwareApplicationImpl
