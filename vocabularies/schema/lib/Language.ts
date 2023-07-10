import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface Language<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
}

export function LanguageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Language & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LanguageClass extends IntangibleMixin(Resource) {
  }
  return LanguageClass as any
}

class LanguageImpl extends LanguageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Language>) {
    super(arg, init)
    this.types.add(schema.Language)
  }

  static readonly __mixins: Mixin[] = [LanguageMixin, IntangibleMixin];
}
LanguageMixin.appliesTo = schema.Language
LanguageMixin.Class = LanguageImpl

export const fromPointer = createFactory<Language>([IntangibleMixin, LanguageMixin], { types: [schema.Language] });
