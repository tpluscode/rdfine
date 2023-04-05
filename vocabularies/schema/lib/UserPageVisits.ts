import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { UserInteractionMixin } from './UserInteraction';

export interface UserPageVisits<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UserInteraction<D>, RdfResource<D> {
}

export function UserPageVisitsMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<UserPageVisits> & RdfResourceCore> & Base {
  @namespace(schema)
  class UserPageVisitsClass extends UserInteractionMixin(Resource) implements Partial<UserPageVisits> {
  }
  return UserPageVisitsClass
}

class UserPageVisitsImpl extends UserPageVisitsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserPageVisits>) {
    super(arg, init)
    this.types.add(schema.UserPageVisits)
  }

  static readonly __mixins: Mixin[] = [UserPageVisitsMixin, UserInteractionMixin];
}
UserPageVisitsMixin.appliesTo = schema.UserPageVisits
UserPageVisitsMixin.Class = UserPageVisitsImpl

export const fromPointer = createFactory<UserPageVisits>([UserInteractionMixin, UserPageVisitsMixin], { types: [schema.UserPageVisits] });
