import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import UserInteractionMixin from './UserInteraction';

export interface UserBlocks extends Schema.UserInteraction, RdfResource {
}

export default function UserBlocksMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UserBlocksClass extends UserInteractionMixin(Resource) implements UserBlocks {
  }
  return UserBlocksClass
}

class UserBlocksImpl extends UserBlocksMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.UserBlocks)
  }
}
UserBlocksMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserBlocks)
UserBlocksMixin.Class = UserBlocksImpl
