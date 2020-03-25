import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Language>) {
    super(arg)
    this.types.add(schema.Language)
    initializeProperties<Language>(this, init)
  }
}
LanguageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Language)
LanguageMixin.Class = LanguageImpl
