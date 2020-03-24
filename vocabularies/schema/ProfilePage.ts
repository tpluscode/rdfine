import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<ProfilePage>) {
    super(arg)
    this.types.add(schema.ProfilePage)
    initializeProperties(this, init)
  }
}
ProfilePageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ProfilePage)
ProfilePageMixin.Class = ProfilePageImpl
