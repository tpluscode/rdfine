import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageMixin } from './WebPage';

export interface ProfilePage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPage<D>, RdfResource<D> {
}

export function ProfilePageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ProfilePage> & RdfResourceCore> & Base {
  @namespace(schema)
  class ProfilePageClass extends WebPageMixin(Resource) implements Partial<ProfilePage> {
  }
  return ProfilePageClass
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
