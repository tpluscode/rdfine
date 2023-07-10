import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface SoftwareSourceCode<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  codeRepository: RDF.NamedNode | undefined;
  codeSampleType: string | undefined;
  programmingLanguage: Schema.ComputerLanguage<D> | undefined;
  programmingLanguageLiteral: string | undefined;
  runtime: string | undefined;
  runtimePlatform: string | undefined;
  sampleType: string | undefined;
  targetProduct: Schema.SoftwareApplication<D> | undefined;
}

export function SoftwareSourceCodeMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SoftwareSourceCode & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SoftwareSourceCodeClass extends CreativeWorkMixin(Resource) {
    @rdfine.property()
    codeRepository: RDF.NamedNode | undefined;
    @rdfine.property.literal()
    codeSampleType: string | undefined;
    @rdfine.property.resource()
    programmingLanguage: Schema.ComputerLanguage | undefined;
    @rdfine.property.literal({ path: schema.programmingLanguage })
    programmingLanguageLiteral: string | undefined;
    @rdfine.property.literal()
    runtime: string | undefined;
    @rdfine.property.literal()
    runtimePlatform: string | undefined;
    @rdfine.property.literal()
    sampleType: string | undefined;
    @rdfine.property.resource()
    targetProduct: Schema.SoftwareApplication | undefined;
  }
  return SoftwareSourceCodeClass as any
}

class SoftwareSourceCodeImpl extends SoftwareSourceCodeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SoftwareSourceCode>) {
    super(arg, init)
    this.types.add(schema.SoftwareSourceCode)
  }

  static readonly __mixins: Mixin[] = [SoftwareSourceCodeMixin, CreativeWorkMixin];
}
SoftwareSourceCodeMixin.appliesTo = schema.SoftwareSourceCode
SoftwareSourceCodeMixin.Class = SoftwareSourceCodeImpl

export const fromPointer = createFactory<SoftwareSourceCode>([CreativeWorkMixin, SoftwareSourceCodeMixin], { types: [schema.SoftwareSourceCode] });
