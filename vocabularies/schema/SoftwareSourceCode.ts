import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface SoftwareSourceCode extends Schema.CreativeWork, RdfResource {
  codeRepository: string;
  codeSampleType: string;
  programmingLanguage: Schema.ComputerLanguage;
  programmingLanguageLiteral: string;
  runtime: string;
  runtimePlatform: string;
  sampleType: string;
  targetProduct: Schema.SoftwareApplication;
}

export default function SoftwareSourceCodeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SoftwareSourceCodeClass extends CreativeWorkMixin(Resource) implements SoftwareSourceCode {
    @property.literal()
    codeRepository!: string;
    @property.literal()
    codeSampleType!: string;
    @property.resource()
    programmingLanguage!: Schema.ComputerLanguage;
    @property.literal({ path: schema.programmingLanguage })
    programmingLanguageLiteral!: string;
    @property.literal()
    runtime!: string;
    @property.literal()
    runtimePlatform!: string;
    @property.literal()
    sampleType!: string;
    @property.resource()
    targetProduct!: Schema.SoftwareApplication;
  }
  return SoftwareSourceCodeClass
}

class SoftwareSourceCodeImpl extends SoftwareSourceCodeMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SoftwareSourceCode)
  }
}
SoftwareSourceCodeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SoftwareSourceCode)
SoftwareSourceCodeMixin.Class = SoftwareSourceCodeImpl
