import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AllocateActionMixin } from './AllocateAction.js';

export interface AuthorizeAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AllocateAction<D>, rdfine.RdfResource<D> {
  recipient: Schema.Audience<D> | Schema.ContactPoint<D> | Schema.Organization<D> | Schema.Person<D> | undefined;
}

export function AuthorizeActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AuthorizeAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AuthorizeActionClass extends AllocateActionMixin(Resource) {
    @rdfine.property.resource()
    recipient: Schema.Audience | Schema.ContactPoint | Schema.Organization | Schema.Person | undefined;
  }
  return AuthorizeActionClass as any
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

export const fromPointer = createFactory<AuthorizeAction>([AllocateActionMixin, AuthorizeActionMixin], { types: [schema.AuthorizeAction] });
