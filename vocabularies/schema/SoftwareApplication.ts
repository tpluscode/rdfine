import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface SoftwareApplication extends Schema.CreativeWork, RdfResource {
  applicationCategory: rdf.Term;
  applicationCategoryLiteral: string;
  applicationSubCategory: rdf.Term;
  applicationSubCategoryLiteral: string;
  applicationSuite: string;
  availableOnDevice: string;
  countriesNotSupported: string;
  countriesSupported: string;
  device: string;
  downloadUrl: rdf.Term;
  featureList: rdf.Term;
  featureListLiteral: string;
  fileSize: string;
  installUrl: rdf.Term;
  memoryRequirements: rdf.Term;
  memoryRequirementsLiteral: string;
  operatingSystem: string;
  permissions: string;
  processorRequirements: string;
  releaseNotes: rdf.Term;
  releaseNotesLiteral: string;
  requirements: rdf.Term;
  requirementsLiteral: string;
  screenshot: Schema.ImageObject;
  softwareAddOn: SoftwareApplication;
  softwareHelp: Schema.CreativeWork;
  softwareRequirements: rdf.Term;
  softwareRequirementsLiteral: string;
  softwareVersion: string;
  storageRequirements: rdf.Term;
  storageRequirementsLiteral: string;
  supportingData: Schema.DataFeed;
}

export default function SoftwareApplicationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SoftwareApplicationClass extends CreativeWorkMixin(Resource) implements SoftwareApplication {
    @property()
    applicationCategory!: rdf.Term;
    @property.literal({ path: schema.applicationCategory })
    applicationCategoryLiteral!: string;
    @property()
    applicationSubCategory!: rdf.Term;
    @property.literal({ path: schema.applicationSubCategory })
    applicationSubCategoryLiteral!: string;
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
    downloadUrl!: rdf.Term;
    @property()
    featureList!: rdf.Term;
    @property.literal({ path: schema.featureList })
    featureListLiteral!: string;
    @property.literal()
    fileSize!: string;
    @property()
    installUrl!: rdf.Term;
    @property()
    memoryRequirements!: rdf.Term;
    @property.literal({ path: schema.memoryRequirements })
    memoryRequirementsLiteral!: string;
    @property.literal()
    operatingSystem!: string;
    @property.literal()
    permissions!: string;
    @property.literal()
    processorRequirements!: string;
    @property()
    releaseNotes!: rdf.Term;
    @property.literal({ path: schema.releaseNotes })
    releaseNotesLiteral!: string;
    @property()
    requirements!: rdf.Term;
    @property.literal({ path: schema.requirements })
    requirementsLiteral!: string;
    @property.resource()
    screenshot!: Schema.ImageObject;
    @property.resource()
    softwareAddOn!: SoftwareApplication;
    @property.resource()
    softwareHelp!: Schema.CreativeWork;
    @property()
    softwareRequirements!: rdf.Term;
    @property.literal({ path: schema.softwareRequirements })
    softwareRequirementsLiteral!: string;
    @property.literal()
    softwareVersion!: string;
    @property()
    storageRequirements!: rdf.Term;
    @property.literal({ path: schema.storageRequirements })
    storageRequirementsLiteral!: string;
    @property.resource()
    supportingData!: Schema.DataFeed;
  }
  return SoftwareApplicationClass
}

class SoftwareApplicationImpl extends SoftwareApplicationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<SoftwareApplication>) {
    super(arg)
    this.types.add(schema.SoftwareApplication)
    initializeProperties<SoftwareApplication>(this, init)
  }
}
SoftwareApplicationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SoftwareApplication)
SoftwareApplicationMixin.Class = SoftwareApplicationImpl
