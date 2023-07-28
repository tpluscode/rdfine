import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { WebPageMixin } from './WebPage.js';

export interface ProfilePage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPage<D>, rdfine.RdfResource<D> {
}

export function ProfilePageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ProfilePage & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ProfilePageClass extends WebPageMixin(Resource) {
  }
  return ProfilePageClass as any
}

class ProfilePageImpl extends ProfilePageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ProfilePage>) {
    super(arg, init)
    this.types.add(schema.ProfilePage)
  }

  static readonly __mixins: Mixin[] = [ProfilePageMixin, WebPageMixin];
}
ProfilePageMixin.appliesTo = schema.ProfilePage
ProfilePageMixin.Class = ProfilePageImpl

export const fromPointer = createFactory<ProfilePage>([WebPageMixin, ProfilePageMixin], { types: [schema.ProfilePage] });
