import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface SoftwareApplication<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  applicationCategory: string | undefined;
  applicationCategoryTerm: RDF.NamedNode | undefined;
  applicationSubCategory: string | undefined;
  applicationSubCategoryTerm: RDF.NamedNode | undefined;
  applicationSuite: string | undefined;
  availableOnDevice: string | undefined;
  countriesNotSupported: string | undefined;
  countriesSupported: string | undefined;
  device: string | undefined;
  downloadUrl: RDF.NamedNode | undefined;
  featureList: string | undefined;
  featureListTerm: RDF.NamedNode | undefined;
  fileSize: string | undefined;
  installUrl: RDF.NamedNode | undefined;
  memoryRequirements: string | undefined;
  memoryRequirementsTerm: RDF.NamedNode | undefined;
  operatingSystem: string | undefined;
  permissions: string | undefined;
  processorRequirements: string | undefined;
  releaseNotes: string | undefined;
  releaseNotesTerm: RDF.NamedNode | undefined;
  requirements: string | undefined;
  requirementsTerm: RDF.NamedNode | undefined;
  screenshot: Schema.ImageObject<D> | undefined;
  softwareAddOn: Schema.SoftwareApplication<D> | undefined;
  softwareHelp: Schema.CreativeWork<D> | undefined;
  softwareRequirements: string | undefined;
  softwareRequirementsTerm: RDF.NamedNode | undefined;
  softwareVersion: string | undefined;
  storageRequirements: string | undefined;
  storageRequirementsTerm: RDF.NamedNode | undefined;
  supportingData: Schema.DataFeed<D> | undefined;
}

export function SoftwareApplicationMixin<Base extends Constructor>(Resource: Base): Constructor<SoftwareApplication> & Base {
  @namespace(schema)
  class SoftwareApplicationClass extends CreativeWorkMixin(Resource) implements SoftwareApplication {
    @property.literal()
    applicationCategory: string | undefined;
    @property({ path: schema.applicationCategory })
    applicationCategoryTerm: RDF.NamedNode | undefined;
    @property.literal()
    applicationSubCategory: string | undefined;
    @property({ path: schema.applicationSubCategory })
    applicationSubCategoryTerm: RDF.NamedNode | undefined;
    @property.literal()
    applicationSuite: string | undefined;
    @property.literal()
    availableOnDevice: string | undefined;
    @property.literal()
    countriesNotSupported: string | undefined;
    @property.literal()
    countriesSupported: string | undefined;
    @property.literal()
    device: string | undefined;
    @property()
    downloadUrl: RDF.NamedNode | undefined;
    @property.literal()
    featureList: string | undefined;
    @property({ path: schema.featureList })
    featureListTerm: RDF.NamedNode | undefined;
    @property.literal()
    fileSize: string | undefined;
    @property()
    installUrl: RDF.NamedNode | undefined;
    @property.literal()
    memoryRequirements: string | undefined;
    @property({ path: schema.memoryRequirements })
    memoryRequirementsTerm: RDF.NamedNode | undefined;
    @property.literal()
    operatingSystem: string | undefined;
    @property.literal()
    permissions: string | undefined;
    @property.literal()
    processorRequirements: string | undefined;
    @property.literal()
    releaseNotes: string | undefined;
    @property({ path: schema.releaseNotes })
    releaseNotesTerm: RDF.NamedNode | undefined;
    @property.literal()
    requirements: string | undefined;
    @property({ path: schema.requirements })
    requirementsTerm: RDF.NamedNode | undefined;
    @property.resource()
    screenshot: Schema.ImageObject | undefined;
    @property.resource()
    softwareAddOn: Schema.SoftwareApplication | undefined;
    @property.resource()
    softwareHelp: Schema.CreativeWork | undefined;
    @property.literal()
    softwareRequirements: string | undefined;
    @property({ path: schema.softwareRequirements })
    softwareRequirementsTerm: RDF.NamedNode | undefined;
    @property.literal()
    softwareVersion: string | undefined;
    @property.literal()
    storageRequirements: string | undefined;
    @property({ path: schema.storageRequirements })
    storageRequirementsTerm: RDF.NamedNode | undefined;
    @property.resource()
    supportingData: Schema.DataFeed | undefined;
  }
  return SoftwareApplicationClass
}

class SoftwareApplicationImpl extends SoftwareApplicationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SoftwareApplication>) {
    super(arg, init)
    this.types.add(schema.SoftwareApplication)
  }

  static readonly __mixins: Mixin[] = [SoftwareApplicationMixin, CreativeWorkMixin];
}
SoftwareApplicationMixin.appliesTo = schema.SoftwareApplication
SoftwareApplicationMixin.Class = SoftwareApplicationImpl
