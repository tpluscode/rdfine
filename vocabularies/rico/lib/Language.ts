import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '../index.js';
import { ConceptMixin } from './Concept.js';

export interface Language<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Concept<D>, rdfine.RdfResource<D> {
  isOrWasLanguageOf: Rico.Agent<D> | Rico.Record<D> | Rico.RecordPart<D> | undefined;
  isOrWasLanguageOfAllMembersOf: Rico.RecordSet<D> | undefined;
  isOrWasLanguageOfSomeMembersOf: Rico.RecordSet<D> | undefined;
}

export function LanguageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Language> & RdfResourceCore> & Base {
  @rdfine.namespace(rico)
  class LanguageClass extends ConceptMixin(Resource) implements Partial<Language> {
    @rdfine.property.resource()
    isOrWasLanguageOf: Rico.Agent | Rico.Record | Rico.RecordPart | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasLanguageOfAllMembersOf: Rico.RecordSet | undefined;
    @rdfine.property.resource({ implicitTypes: [rico.RecordSet] })
    isOrWasLanguageOfSomeMembersOf: Rico.RecordSet | undefined;
  }
  return LanguageClass
}

class LanguageImpl extends LanguageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Language>) {
    super(arg, init)
    this.types.add(rico.Language)
  }

  static readonly __mixins: Mixin[] = [LanguageMixin, ConceptMixin];
}
LanguageMixin.appliesTo = rico.Language
LanguageMixin.Class = LanguageImpl

export const fromPointer = createFactory<Language>([ConceptMixin, LanguageMixin], { types: [rico.Language] });
