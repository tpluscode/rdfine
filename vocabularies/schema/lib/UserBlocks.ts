import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { UserInteractionMixin } from './UserInteraction.js';

export interface UserBlocks<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UserInteraction<D>, rdfine.RdfResource<D> {
}

export function UserBlocksMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<UserBlocks & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class UserBlocksClass extends UserInteractionMixin(Resource) {
  }
  return UserBlocksClass as any
}

class UserBlocksImpl extends UserBlocksMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserBlocks>) {
    super(arg, init)
    this.types.add(schema.UserBlocks)
  }

  static readonly __mixins: Mixin[] = [UserBlocksMixin, UserInteractionMixin];
}
UserBlocksMixin.appliesTo = schema.UserBlocks
UserBlocksMixin.Class = UserBlocksImpl

export const fromPointer = createFactory<UserBlocks>([UserInteractionMixin, UserBlocksMixin], { types: [schema.UserBlocks] });
