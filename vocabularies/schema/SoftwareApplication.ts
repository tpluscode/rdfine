import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface SoftwareApplication extends Schema.CreativeWork, RdfResource {
  applicationCategory: string | string;
  applicationSubCategory: string | string;
  applicationSuite: string;
  availableOnDevice: string;
  countriesNotSupported: string;
  countriesSupported: string;
  device: string;
  downloadUrl: string;
  featureList: string | string;
  fileSize: string;
  installUrl: string;
  memoryRequirements: string | string;
  operatingSystem: string;
  permissions: string;
  processorRequirements: string;
  releaseNotes: string | string;
  requirements: string | string;
  screenshot: Schema.ImageObject;
  screenshotLiteral: string;
  softwareAddOn: SoftwareApplication;
  softwareHelp: Schema.CreativeWork;
  softwareRequirements: string | string;
  softwareVersion: string;
  storageRequirements: string | string;
  supportingData: Schema.DataFeed;
}

export default function SoftwareApplicationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SoftwareApplicationClass extends CreativeWorkMixin(Resource) implements SoftwareApplication {
    @property.literal()
    applicationCategory!: string | string;
    @property.literal()
    applicationSubCategory!: string | string;
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
    @property.literal()
    downloadUrl!: string;
    @property.literal()
    featureList!: string | string;
    @property.literal()
    fileSize!: string;
    @property.literal()
    installUrl!: string;
    @property.literal()
    memoryRequirements!: string | string;
    @property.literal()
    operatingSystem!: string;
    @property.literal()
    permissions!: string;
    @property.literal()
    processorRequirements!: string;
    @property.literal()
    releaseNotes!: string | string;
    @property.literal()
    requirements!: string | string;
    @property.resource()
    screenshot!: Schema.ImageObject;
    @property.literal({ path: schema.screenshot })
    screenshotLiteral!: string;
    @property.resource()
    softwareAddOn!: SoftwareApplication;
    @property.resource()
    softwareHelp!: Schema.CreativeWork;
    @property.literal()
    softwareRequirements!: string | string;
    @property.literal()
    softwareVersion!: string;
    @property.literal()
    storageRequirements!: string | string;
    @property.resource()
    supportingData!: Schema.DataFeed;
  }
  return SoftwareApplicationClass
}

class SoftwareApplicationImpl extends SoftwareApplicationMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SoftwareApplication)
  }
}
SoftwareApplicationMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SoftwareApplication)
SoftwareApplicationMixin.Class = SoftwareApplicationImpl
