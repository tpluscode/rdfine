import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Comment<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  downvoteCount: number | undefined;
  parentItem: Schema.Question<D> | undefined;
  upvoteCount: number | undefined;
}

export function CommentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CommentClass extends CreativeWorkMixin(Resource) implements Comment {
    @property.literal({ type: Number })
    downvoteCount: number | undefined;
    @property.resource()
    parentItem: Schema.Question | undefined;
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
