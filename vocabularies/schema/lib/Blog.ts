import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Blog<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, rdfine.RdfResource<D> {
  blogPost: Schema.BlogPosting<D> | undefined;
  blogPosts: Schema.BlogPosting<D> | undefined;
  issn: string | undefined;
}

export function BlogMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Blog> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class BlogClass extends CreativeWorkMixin(Resource) implements Partial<Blog> {
    @rdfine.property.resource()
    blogPost: Schema.BlogPosting | undefined;
    @rdfine.property.resource()
    blogPosts: Schema.BlogPosting | undefined;
    @rdfine.property.literal()
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

export const fromPointer = createFactory<Blog>([CreativeWorkMixin, BlogMixin], { types: [schema.Blog] });
