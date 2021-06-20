import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Blog<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  blogPost: Schema.BlogPosting<D> | undefined;
  blogPosts: Schema.BlogPosting<D> | undefined;
  issn: string | undefined;
}

export function BlogMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Blog> & RdfResourceCore> & Base {
  @namespace(schema)
  class BlogClass extends CreativeWorkMixin(Resource) implements Partial<Blog> {
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

export const fromPointer = createFactory<Blog>([CreativeWorkMixin, BlogMixin], { types: [schema.Blog] });
