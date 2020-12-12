import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { UserInteractionMixin } from './UserInteraction';

export interface UserComments<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UserInteraction<D>, RdfResource<D> {
  commentText: string | undefined;
  commentTime: Date | undefined;
  creator: Schema.Organization<D> | Schema.Person<D> | undefined;
  discusses: Schema.CreativeWork<D> | undefined;
  replyToUrl: RDF.NamedNode | undefined;
}

export function UserCommentsMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<UserComments> & RdfResourceCore> & Base {
  @namespace(schema)
  class UserCommentsClass extends UserInteractionMixin(Resource) implements Partial<UserComments> {
    @property.literal()
    commentText: string | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    commentTime: Date | undefined;
    @property.resource()
    creator: Schema.Organization | Schema.Person | undefined;
    @property.resource()
    discusses: Schema.CreativeWork | undefined;
    @property()
    replyToUrl: RDF.NamedNode | undefined;
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

export const fromPointer = createFactory<UserComments>([UserInteractionMixin, UserCommentsMixin], { types: [schema.UserComments] });
