import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface Language extends Schema.Intangible, RdfResource {
}

export default function LanguageMixin<Base extends Constructor>(Resource: Base) {
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
}
LanguageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Language)
LanguageMixin.Class = LanguageImpl
