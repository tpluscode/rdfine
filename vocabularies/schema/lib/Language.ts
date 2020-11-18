import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface Language<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
}

export function LanguageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LanguageClass extends IntangibleMixin(Resource) implements Language {
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
