import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface Comment extends Schema.CreativeWork, RdfResource {
  downvoteCount: number;
  parentItem: Schema.Question;
  upvoteCount: number;
}

export default function CommentMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CommentClass extends CreativeWorkMixin(Resource) implements Comment {
    @property.literal({ type: Number })
    downvoteCount!: number;
    @property.resource()
    parentItem!: Schema.Question;
    @property.literal({ type: Number })
    upvoteCount!: number;
  }
  return CommentClass
}

class CommentImpl extends CommentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Comment>) {
    super(arg, init)
    this.types.add(schema.Comment)
  }
}
CommentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Comment)
CommentMixin.Class = CommentImpl
