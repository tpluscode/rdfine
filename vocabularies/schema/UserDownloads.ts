import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import UserInteractionMixin from './UserInteraction';

export interface UserDownloads extends Schema.UserInteraction, RdfResource {
}

export default function UserDownloadsMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UserDownloadsClass extends UserInteractionMixin(Resource) implements UserDownloads {
  }
  return UserDownloadsClass
}

class UserDownloadsImpl extends UserDownloadsMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.UserDownloads)
  }
}
UserDownloadsMixin.shouldApply = (r: RdfResource) => r.types.has(schema.UserDownloads)
UserDownloadsMixin.Class = UserDownloadsImpl
