import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { UserInteractionMixin } from './UserInteraction.js';

export interface UserComments<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UserInteraction<D>, rdfine.RdfResource<D> {
  commentText: string | undefined;
  commentTime: Date | undefined;
  creator: Schema.Organization<D> | Schema.Person<D> | undefined;
  discusses: Schema.CreativeWork<D> | undefined;
  replyToUrl: RDF.NamedNode | undefined;
}

export function UserCommentsMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<UserComments & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class UserCommentsClass extends UserInteractionMixin(Resource) {
    @rdfine.property.literal()
    commentText: string | undefined;
    @rdfine.property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    commentTime: Date | undefined;
    @rdfine.property.resource()
    creator: Schema.Organization | Schema.Person | undefined;
    @rdfine.property.resource()
    discusses: Schema.CreativeWork | undefined;
    @rdfine.property()
    replyToUrl: RDF.NamedNode | undefined;
  }
  return UserCommentsClass as any
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

export const fromPointer = createFactory<UserComments>([UserInteractionMixin, UserCommentsMixin], { types: [schema.UserComments] });
