import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import UserInteractionMixin from './UserInteraction';

export interface UserComments extends Schema.UserInteraction, RdfResource {
  commentText: string;
  commentTime: Date | Date;
  creator: Schema.Organization | Schema.Person;
  discusses: Schema.CreativeWork;
  replyToUrl: string;
}

export default function UserCommentsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UserCommentsClass extends UserInteractionMixin(Resource) implements UserComments {
    @property.literal()
    commentText!: string;
    @property.literal()
    commentTime!: Date | Date;
    @property.resource()
    creator!: Schema.Organization | Schema.Person;
    @property.resource()
    discusses!: Schema.CreativeWork;
    @property.literal()
    replyToUrl!: string;
  }
  return UserCommentsClass
}

class UserCommentsImpl extends UserCommentsMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.UserComments)
  }
}
UserCommentsMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserComments)
UserCommentsMixin.Class = UserCommentsImpl
