import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ScholarlyArticleMixin } from './ScholarlyArticle.js';

export interface MedicalScholarlyArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ScholarlyArticle<D>, RdfResource<D> {
  publicationType: string | undefined;
}

export function MedicalScholarlyArticleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalScholarlyArticle> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalScholarlyArticleClass extends ScholarlyArticleMixin(Resource) implements Partial<MedicalScholarlyArticle> {
    @property.literal()
    publicationType: string | undefined;
  }
  return MedicalScholarlyArticleClass
}

class MedicalScholarlyArticleImpl extends MedicalScholarlyArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalScholarlyArticle>) {
    super(arg, init)
    this.types.add(schema.MedicalScholarlyArticle)
  }

  static readonly __mixins: Mixin[] = [MedicalScholarlyArticleMixin, ScholarlyArticleMixin];
}
MedicalScholarlyArticleMixin.appliesTo = schema.MedicalScholarlyArticle
MedicalScholarlyArticleMixin.Class = MedicalScholarlyArticleImpl

export const fromPointer = createFactory<MedicalScholarlyArticle>([ScholarlyArticleMixin, MedicalScholarlyArticleMixin], { types: [schema.MedicalScholarlyArticle] });
