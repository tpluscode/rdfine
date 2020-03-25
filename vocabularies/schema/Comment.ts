import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<Comment>) {
    super(arg)
    this.types.add(schema.Comment)
    initializeProperties<Comment>(this, init)
  }
}
CommentMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Comment)
CommentMixin.Class = CommentImpl
