import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { UserInteractionMixin } from './UserInteraction';

export interface UserBlocks<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UserInteraction<D>, RdfResource<D> {
}

export function UserBlocksMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<UserBlocks> & RdfResourceCore> & Base {
  @namespace(schema)
  class UserBlocksClass extends UserInteractionMixin(Resource) implements Partial<UserBlocks> {
  }
  return UserBlocksClass
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
