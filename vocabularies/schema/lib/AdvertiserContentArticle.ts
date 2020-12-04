import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ArticleMixin } from './Article';

export interface AdvertiserContentArticle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Article<D>, RdfResource<D> {
}

export function AdvertiserContentArticleMixin<Base extends Constructor>(Resource: Base): Constructor<AdvertiserContentArticle> & Base {
  @namespace(schema)
  class AdvertiserContentArticleClass extends ArticleMixin(Resource) implements AdvertiserContentArticle {
  }
  return AdvertiserContentArticleClass
}

class AdvertiserContentArticleImpl extends AdvertiserContentArticleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AdvertiserContentArticle>) {
    super(arg, init)
    this.types.add(schema.AdvertiserContentArticle)
  }

  static readonly __mixins: Mixin[] = [AdvertiserContentArticleMixin, ArticleMixin];
}
AdvertiserContentArticleMixin.appliesTo = schema.AdvertiserContentArticle
AdvertiserContentArticleMixin.Class = AdvertiserContentArticleImpl
