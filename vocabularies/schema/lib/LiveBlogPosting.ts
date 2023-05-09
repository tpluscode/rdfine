import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { BlogPostingMixin } from './BlogPosting.js';

export interface LiveBlogPosting<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BlogPosting<D>, rdfine.RdfResource<D> {
  coverageEndTime: Date | undefined;
  coverageStartTime: Date | undefined;
  liveBlogUpdate: Schema.BlogPosting<D> | undefined;
}

export function LiveBlogPostingMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<LiveBlogPosting> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class LiveBlogPostingClass extends BlogPostingMixin(Resource) implements Partial<LiveBlogPosting> {
    @rdfine.property.literal({ type: Date })
    coverageEndTime: Date | undefined;
    @rdfine.property.literal({ type: Date })
    coverageStartTime: Date | undefined;
    @rdfine.property.resource()
    liveBlogUpdate: Schema.BlogPosting | undefined;
  }
  return LiveBlogPostingClass
}

class LiveBlogPostingImpl extends LiveBlogPostingMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LiveBlogPosting>) {
    super(arg, init)
    this.types.add(schema.LiveBlogPosting)
  }

  static readonly __mixins: Mixin[] = [LiveBlogPostingMixin, BlogPostingMixin];
}
LiveBlogPostingMixin.appliesTo = schema.LiveBlogPosting
LiveBlogPostingMixin.Class = LiveBlogPostingImpl

export const fromPointer = createFactory<LiveBlogPosting>([BlogPostingMixin, LiveBlogPostingMixin], { types: [schema.LiveBlogPosting] });
