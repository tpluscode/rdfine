import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface Blog extends Schema.CreativeWork, RdfResource {
  blogPost: Schema.BlogPosting | undefined;
  blogPosts: Schema.BlogPosting | undefined;
  issn: string | undefined;
}

export function BlogMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class BlogClass extends CreativeWorkMixin(Resource) implements Blog {
    @property.resource()
    blogPost: Schema.BlogPosting | undefined;
    @property.resource()
    blogPosts: Schema.BlogPosting | undefined;
    @property.literal()
    issn: string | undefined;
  }
  return BlogClass
}

class BlogImpl extends BlogMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Blog>) {
    super(arg, init)
    this.types.add(schema.Blog)
  }

  static readonly __mixins: Mixin[] = [BlogMixin, CreativeWorkMixin];
}
BlogMixin.appliesTo = schema.Blog
BlogMixin.Class = BlogImpl
