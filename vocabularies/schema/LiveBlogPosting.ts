import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { BlogPostingMixin } from './BlogPosting';

export interface LiveBlogPosting extends Schema.BlogPosting, RdfResource {
  coverageEndTime: Date | undefined;
  coverageStartTime: Date | undefined;
  liveBlogUpdate: Schema.BlogPosting | undefined;
}

export function LiveBlogPostingMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LiveBlogPostingClass extends BlogPostingMixin(Resource) implements LiveBlogPosting {
    @property.literal({ type: Date })
    coverageEndTime: Date | undefined;
    @property.literal({ type: Date })
    coverageStartTime: Date | undefined;
    @property.resource()
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
