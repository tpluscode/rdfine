import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface SoftwareApplication extends Schema.CreativeWork, RdfResource {
  applicationCategory: string;
  applicationCategoryTerm: rdf.NamedNode;
  applicationSubCategory: string;
  applicationSubCategoryTerm: rdf.NamedNode;
  applicationSuite: string;
  availableOnDevice: string;
  countriesNotSupported: string;
  countriesSupported: string;
  device: string;
  downloadUrl: rdf.NamedNode;
  featureList: string;
  featureListTerm: rdf.NamedNode;
  fileSize: string;
  installUrl: rdf.NamedNode;
  memoryRequirements: string;
  memoryRequirementsTerm: rdf.NamedNode;
  operatingSystem: string;
  permissions: string;
  processorRequirements: string;
  releaseNotes: string;
  releaseNotesTerm: rdf.NamedNode;
  requirements: string;
  requirementsTerm: rdf.NamedNode;
  screenshot: Schema.ImageObject;
  softwareAddOn: Schema.SoftwareApplication;
  softwareHelp: Schema.CreativeWork;
  softwareRequirements: string;
  softwareRequirementsTerm: rdf.NamedNode;
  softwareVersion: string;
  storageRequirements: string;
  storageRequirementsTerm: rdf.NamedNode;
  supportingData: Schema.DataFeed;
}

export default function SoftwareApplicationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SoftwareApplicationClass extends CreativeWorkMixin(Resource) implements SoftwareApplication {
    @property.literal()
    applicationCategory!: string;
    @property({ path: schema.applicationCategory })
    applicationCategoryTerm!: rdf.NamedNode;
    @property.literal()
    applicationSubCategory!: string;
    @property({ path: schema.applicationSubCategory })
    applicationSubCategoryTerm!: rdf.NamedNode;
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
    downloadUrl!: rdf.NamedNode;
    @property.literal()
    featureList!: string;
    @property({ path: schema.featureList })
    featureListTerm!: rdf.NamedNode;
    @property.literal()
    fileSize!: string;
    @property()
    installUrl!: rdf.NamedNode;
    @property.literal()
    memoryRequirements!: string;
    @property({ path: schema.memoryRequirements })
    memoryRequirementsTerm!: rdf.NamedNode;
    @property.literal()
    operatingSystem!: string;
    @property.literal()
    permissions!: string;
    @property.literal()
    processorRequirements!: string;
    @property.literal()
    releaseNotes!: string;
    @property({ path: schema.releaseNotes })
    releaseNotesTerm!: rdf.NamedNode;
    @property.literal()
    requirements!: string;
    @property({ path: schema.requirements })
    requirementsTerm!: rdf.NamedNode;
    @property.resource()
    screenshot!: Schema.ImageObject;
    @property.resource()
    softwareAddOn!: Schema.SoftwareApplication;
    @property.resource()
    softwareHelp!: Schema.CreativeWork;
    @property.literal()
    softwareRequirements!: string;
    @property({ path: schema.softwareRequirements })
    softwareRequirementsTerm!: rdf.NamedNode;
    @property.literal()
    softwareVersion!: string;
    @property.literal()
    storageRequirements!: string;
    @property({ path: schema.storageRequirements })
    storageRequirementsTerm!: rdf.NamedNode;
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
