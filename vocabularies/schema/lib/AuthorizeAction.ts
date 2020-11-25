import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AllocateActionMixin } from './AllocateAction';

export interface AuthorizeAction<ID extends ResourceNode = ResourceNode> extends Schema.AllocateAction<ID>, RdfResource<ID> {
  recipient: Schema.Audience<SiblingNode<ID>> | Schema.ContactPoint<SiblingNode<ID>> | Schema.Organization<SiblingNode<ID>> | Schema.Person<SiblingNode<ID>> | undefined;
}

export function AuthorizeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AuthorizeActionClass extends AllocateActionMixin(Resource) implements AuthorizeAction {
    @property.resource()
    recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
  }
  return AuthorizeActionClass
}

class AuthorizeActionImpl extends AuthorizeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AuthorizeAction>) {
    super(arg, init)
    this.types.add(schema.AuthorizeAction)
  }

  static readonly __mixins: Mixin[] = [AuthorizeActionMixin, AllocateActionMixin];
}
AuthorizeActionMixin.appliesTo = schema.AuthorizeAction
AuthorizeActionMixin.Class = AuthorizeActionImpl
