import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { UserInteractionMixin } from './UserInteraction';

export interface UserComments extends Schema.UserInteraction, RdfResource {
  commentText: string;
  commentTime: Date;
  creator: Schema.Organization | Schema.Person;
  discusses: Schema.CreativeWork;
  replyToUrl: RDF.NamedNode;
}

export function UserCommentsMixin<Base extends Constructor>(Resource: Base) {
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
    replyToUrl!: RDF.NamedNode;
  }
  return UserCommentsClass
}

class UserCommentsImpl extends UserCommentsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserComments>) {
    super(arg, init)
    this.types.add(schema.UserComments)
  }

  static readonly __mixins: Mixin[] = [UserCommentsMixin, UserInteractionMixin];
}
UserCommentsMixin.appliesTo = schema.UserComments
UserCommentsMixin.Class = UserCommentsImpl
