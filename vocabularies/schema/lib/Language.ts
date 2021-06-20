import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Language<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
}

export function LanguageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Language> & RdfResourceCore> & Base {
  @namespace(schema)
  class LanguageClass extends IntangibleMixin(Resource) implements Partial<Language> {
  }
  return LanguageClass
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
