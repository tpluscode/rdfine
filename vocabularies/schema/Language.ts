import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Language)
  }
}
LanguageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Language)
LanguageMixin.Class = LanguageImpl
