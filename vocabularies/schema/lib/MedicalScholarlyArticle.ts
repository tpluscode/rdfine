import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ScholarlyArticleMixin } from './ScholarlyArticle';

export interface MedicalScholarlyArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.ScholarlyArticle<D>, RdfResource<D> {
  publicationType: string | undefined;
}

export function MedicalScholarlyArticleMixin<Base extends Constructor>(Resource: Base): Constructor<MedicalScholarlyArticle> & Base {
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
