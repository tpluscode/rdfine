import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';

export interface PronounceableText<ID extends ResourceNode = ResourceNode> extends RdfResource<ID> {
  inLanguage: Schema.Language<SiblingNode<ID>> | undefined;
  inLanguageLiteral: string | undefined;
  phoneticText: string | undefined;
  speechToTextMarkup: string | undefined;
  textValue: string | undefined;
}

export function PronounceableTextMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PronounceableTextClass extends Resource implements PronounceableText {
    @property.resource()
    inLanguage: Schema.Language | undefined;
    @property.literal({ path: schema.inLanguage })
    inLanguageLiteral: string | undefined;
    @property.literal()
    phoneticText: string | undefined;
    @property.literal()
    speechToTextMarkup: string | undefined;
    @property.literal()
    textValue: string | undefined;
  }
  return PronounceableTextClass
}

class PronounceableTextImpl extends PronounceableTextMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PronounceableText>) {
    super(arg, init)
    this.types.add(schema.PronounceableText)
  }

  static readonly __mixins: Mixin[] = [PronounceableTextMixin];
}
PronounceableTextMixin.appliesTo = schema.PronounceableText
PronounceableTextMixin.Class = PronounceableTextImpl
