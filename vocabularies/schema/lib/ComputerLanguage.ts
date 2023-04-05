import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface ComputerLanguage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
}

export function ComputerLanguageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ComputerLanguage> & RdfResourceCore> & Base {
  @namespace(schema)
  class ComputerLanguageClass extends IntangibleMixin(Resource) implements Partial<ComputerLanguage> {
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

export const fromPointer = createFactory<ComputerLanguage>([IntangibleMixin, ComputerLanguageMixin], { types: [schema.ComputerLanguage] });
