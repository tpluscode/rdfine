import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';

export interface PronounceableText<D extends RDF.DatasetCore = RDF.DatasetCore> extends rdfine.RdfResource<D> {
  inLanguage: Schema.Language<D> | undefined;
  inLanguageLiteral: string | undefined;
  phoneticText: string | undefined;
  speechToTextMarkup: string | undefined;
  textValue: string | undefined;
}

export function PronounceableTextMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<PronounceableText> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class PronounceableTextClass extends Resource implements Partial<PronounceableText> {
    @rdfine.property.resource()
    inLanguage: Schema.Language | undefined;
    @rdfine.property.literal({ path: schema.inLanguage })
    inLanguageLiteral: string | undefined;
    @rdfine.property.literal()
    phoneticText: string | undefined;
    @rdfine.property.literal()
    speechToTextMarkup: string | undefined;
    @rdfine.property.literal()
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
