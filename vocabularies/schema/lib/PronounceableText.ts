import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';

export interface PronounceableText<D extends RDF.DatasetCore = RDF.DatasetCore> extends RdfResource<D> {
  inLanguage: Schema.Language<D> | undefined;
  inLanguageLiteral: string | undefined;
  phoneticText: string | undefined;
  speechToTextMarkup: string | undefined;
  textValue: string | undefined;
}

export function PronounceableTextMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PronounceableText> & RdfResourceCore> & Base {
  @namespace(schema)
  class PronounceableTextClass extends Resource implements Partial<PronounceableText> {
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

export const fromPointer = createFactory<PronounceableText>([PronounceableTextMixin], { types: [schema.PronounceableText] });
