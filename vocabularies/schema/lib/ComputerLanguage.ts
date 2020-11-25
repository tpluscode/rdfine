import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface ComputerLanguage<ID extends ResourceNode = ResourceNode> extends Schema.Intangible<ID>, RdfResource<ID> {
}

export function ComputerLanguageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ComputerLanguageClass extends IntangibleMixin(Resource) implements ComputerLanguage {
  }
  return ComputerLanguageClass
}

class ComputerLanguageImpl extends ComputerLanguageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ComputerLanguage>) {
    super(arg, init)
    this.types.add(schema.ComputerLanguage)
  }

  static readonly __mixins: Mixin[] = [ComputerLanguageMixin, IntangibleMixin];
}
ComputerLanguageMixin.appliesTo = schema.ComputerLanguage
ComputerLanguageMixin.Class = ComputerLanguageImpl
