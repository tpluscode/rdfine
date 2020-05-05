import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { AllocateActionMixin } from './AllocateAction';

export interface AuthorizeAction extends Schema.AllocateAction, RdfResource {
  recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
}

export function AuthorizeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AuthorizeActionClass extends AllocateActionMixin(Resource) implements AuthorizeAction {
    @property.resource()
    recipient!: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
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
