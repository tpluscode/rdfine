import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ProfilePage)
  }
}
ProfilePageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ProfilePage)
ProfilePageMixin.Class = ProfilePageImpl
