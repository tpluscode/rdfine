import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import AllocateActionMixin from './AllocateAction';

export interface AuthorizeAction extends Schema.AllocateAction, RdfResource {
  recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
}

export default function AuthorizeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AuthorizeActionClass extends AllocateActionMixin(Resource) implements AuthorizeAction {
    @property.resource()
    recipient!: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person;
  }
  return AuthorizeActionClass
}

class AuthorizeActionImpl extends AuthorizeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<AuthorizeAction>) {
    super(arg)
    this.types.add(schema.AuthorizeAction)
    initializeProperties<AuthorizeAction>(this, init)
  }
}
AuthorizeActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AuthorizeAction)
AuthorizeActionMixin.Class = AuthorizeActionImpl
