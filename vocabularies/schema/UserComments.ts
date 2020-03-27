import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import UserInteractionMixin from './UserInteraction';

export interface UserComments extends Schema.UserInteraction, RdfResource {
  commentText: string;
  commentTime: Date;
  creator: Schema.Organization | Schema.Person;
  discusses: Schema.CreativeWork;
  replyToUrl: rdf.NamedNode;
}

export default function UserCommentsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UserCommentsClass extends UserInteractionMixin(Resource) implements UserComments {
    @property.literal()
    commentText!: string;
    @property.literal()
    commentTime!: Date;
    @property.resource()
    creator!: Schema.Organization | Schema.Person;
    @property.resource()
    discusses!: Schema.CreativeWork;
    @property()
    replyToUrl!: rdf.NamedNode;
  }
  return UserCommentsClass
}

class UserCommentsImpl extends UserCommentsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserComments>) {
    super(arg, init)
    this.types.add(schema.UserComments)
  }
}
UserCommentsMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserComments)
UserCommentsMixin.Class = UserCommentsImpl
