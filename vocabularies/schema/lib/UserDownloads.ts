import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { UserInteractionMixin } from './UserInteraction';

export interface UserDownloads<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.UserInteraction<D>, RdfResource<D> {
}

export function UserDownloadsMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<UserDownloads> & RdfResourceCore> & Base {
  @namespace(schema)
  class UserDownloadsClass extends UserInteractionMixin(Resource) implements Partial<UserDownloads> {
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

export const fromPointer = createFactory<UserDownloads>([UserInteractionMixin, UserDownloadsMixin], { types: [schema.UserDownloads] });
