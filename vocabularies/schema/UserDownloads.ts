import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { UserInteractionMixin } from './UserInteraction';

export interface UserDownloads extends Schema.UserInteraction, RdfResource {
}

export function UserDownloadsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UserDownloadsClass extends UserInteractionMixin(Resource) implements UserDownloads {
  }
  return UserDownloadsClass
}

class UserDownloadsImpl extends UserDownloadsMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UserDownloads>) {
    super(arg, init)
    this.types.add(schema.UserDownloads)
  }
}
UserDownloadsMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserDownloads)
UserDownloadsMixin.Class = UserDownloadsImpl
