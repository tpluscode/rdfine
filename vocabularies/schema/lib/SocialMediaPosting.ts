import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ArticleMixin } from './Article.js';

export interface SocialMediaPosting<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Article<D>, rdfine.RdfResource<D> {
  sharedContent: Schema.CreativeWork<D> | undefined;
}

export function SocialMediaPostingMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SocialMediaPosting> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SocialMediaPostingClass extends ArticleMixin(Resource) implements Partial<SocialMediaPosting> {
    @rdfine.property.resource()
    sharedContent: Schema.CreativeWork | undefined;
  }
  return SocialMediaPostingClass
}

class SocialMediaPostingImpl extends SocialMediaPostingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SocialMediaPosting>) {
    super(arg, init)
    this.types.add(schema.SocialMediaPosting)
  }

  static readonly __mixins: Mixin[] = [SocialMediaPostingMixin, ArticleMixin];
}
SocialMediaPostingMixin.appliesTo = schema.SocialMediaPosting
SocialMediaPostingMixin.Class = SocialMediaPostingImpl

export const fromPointer = createFactory<SocialMediaPosting>([ArticleMixin, SocialMediaPostingMixin], { types: [schema.SocialMediaPosting] });
