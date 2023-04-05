import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { UserInteractionMixin } from './UserInteraction';

export interface UserCheckins<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UserInteraction<D>, RdfResource<D> {
}

export function UserCheckinsMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<UserCheckins> & RdfResourceCore> & Base {
  @namespace(schema)
  class UserCheckinsClass extends UserInteractionMixin(Resource) implements Partial<UserCheckins> {
  }
  return UserCheckinsClass
}

class UserCheckinsImpl extends UserCheckinsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserCheckins>) {
    super(arg, init)
    this.types.add(schema.UserCheckins)
  }

  static readonly __mixins: Mixin[] = [UserCheckinsMixin, UserInteractionMixin];
}
UserCheckinsMixin.appliesTo = schema.UserCheckins
UserCheckinsMixin.Class = UserCheckinsImpl

export const fromPointer = createFactory<UserCheckins>([UserInteractionMixin, UserCheckinsMixin], { types: [schema.UserCheckins] });
