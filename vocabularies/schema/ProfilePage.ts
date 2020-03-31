import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import WebPageMixin from './WebPage';

export interface ProfilePage extends Schema.WebPage, RdfResource {
}

export default function ProfilePageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ProfilePageClass extends WebPageMixin(Resource) implements ProfilePage {
  }
  return ProfilePageClass
}

class ProfilePageImpl extends ProfilePageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ProfilePage>) {
    super(arg, init)
    this.types.add(schema.ProfilePage)
  }
}
ProfilePageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ProfilePage)
ProfilePageMixin.Class = ProfilePageImpl
