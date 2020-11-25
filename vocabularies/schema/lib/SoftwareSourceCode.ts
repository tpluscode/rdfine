import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface SoftwareSourceCode<ID extends ResourceNode = ResourceNode> extends Schema.CreativeWork<ID>, RdfResource<ID> {
  codeRepository: RDF.NamedNode | undefined;
  codeSampleType: string | undefined;
  programmingLanguage: Schema.ComputerLanguage<SiblingNode<ID>> | undefined;
  programmingLanguageLiteral: string | undefined;
  runtime: string | undefined;
  runtimePlatform: string | undefined;
  sampleType: string | undefined;
  targetProduct: Schema.SoftwareApplication<SiblingNode<ID>> | undefined;
}

export function SoftwareSourceCodeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SoftwareSourceCodeClass extends CreativeWorkMixin(Resource) implements SoftwareSourceCode {
    @property()
    codeRepository: RDF.NamedNode | undefined;
    @property.literal()
    codeSampleType: string | undefined;
    @property.resource()
    programmingLanguage: Schema.ComputerLanguage | undefined;
    @property.literal({ path: schema.programmingLanguage })
    programmingLanguageLiteral: string | undefined;
    @property.literal()
    runtime: string | undefined;
    @property.literal()
    runtimePlatform: string | undefined;
    @property.literal()
    sampleType: string | undefined;
    @property.resource()
    targetProduct: Schema.SoftwareApplication | undefined;
  }
  return SoftwareSourceCodeClass
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
