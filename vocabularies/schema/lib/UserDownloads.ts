import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { UserInteractionMixin } from './UserInteraction';

export interface UserDownloads<ID extends ResourceNode = ResourceNode> extends Schema.UserInteraction<ID>, RdfResource<ID> {
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

  static readonly __mixins: Mixin[] = [UserDownloadsMixin, UserInteractionMixin];
}
UserDownloadsMixin.appliesTo = schema.UserDownloads
UserDownloadsMixin.Class = UserDownloadsImpl
