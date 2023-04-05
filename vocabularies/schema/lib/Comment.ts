import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface Comment<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  downvoteCount: number | undefined;
  parentItem: Schema.Comment<D> | undefined;
  upvoteCount: number | undefined;
}

export function CommentMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Comment> & RdfResourceCore> & Base {
  @namespace(schema)
  class CommentClass extends CreativeWorkMixin(Resource) implements Partial<Comment> {
    @property.literal({ type: Number })
    downvoteCount: number | undefined;
    @property.resource()
    parentItem: Schema.Comment | undefined;
    @property.literal({ type: Number })
    upvoteCount: number | undefined;
  }
  return CommentClass
}

class CommentImpl extends CommentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Comment>) {
    super(arg, init)
    this.types.add(schema.Comment)
  }

  static readonly __mixins: Mixin[] = [CommentMixin, CreativeWorkMixin];
}
CommentMixin.appliesTo = schema.Comment
CommentMixin.Class = CommentImpl

export const fromPointer = createFactory<Comment>([CreativeWorkMixin, CommentMixin], { types: [schema.Comment] });
