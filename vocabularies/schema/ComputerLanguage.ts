import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import IntangibleMixin from './Intangible';

export interface ComputerLanguage extends Schema.Intangible, RdfResource {
}

export default function ComputerLanguageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ComputerLanguageClass extends IntangibleMixin(Resource) implements ComputerLanguage {
  }
  return ComputerLanguageClass
}

class ComputerLanguageImpl extends ComputerLanguageMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ComputerLanguage)
  }
}
ComputerLanguageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ComputerLanguage)
ComputerLanguageMixin.Class = ComputerLanguageImpl
