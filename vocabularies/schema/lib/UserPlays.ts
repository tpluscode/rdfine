import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { UserInteractionMixin } from './UserInteraction';

export interface UserPlays<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UserInteraction<D>, RdfResource<D> {
}

export function UserPlaysMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<UserPlays> & RdfResourceCore> & Base {
  @namespace(schema)
  class UserPlaysClass extends UserInteractionMixin(Resource) implements Partial<UserPlays> {
  }
  return UserPlaysClass
}

class UserPlaysImpl extends UserPlaysMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserPlays>) {
    super(arg, init)
    this.types.add(schema.UserPlays)
  }

  static readonly __mixins: Mixin[] = [UserPlaysMixin, UserInteractionMixin];
}
UserPlaysMixin.appliesTo = schema.UserPlays
UserPlaysMixin.Class = UserPlaysImpl

export const fromPointer = createFactory<UserPlays>([UserInteractionMixin, UserPlaysMixin], { types: [schema.UserPlays] });
