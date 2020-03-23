import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import WebPageMixin from './WebPage';

export interface ContactPage extends Schema.WebPage, RdfResource {
}

export default function ContactPageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ContactPageClass extends WebPageMixin(Resource) implements ContactPage {
  }
  return ContactPageClass
}

class ContactPageImpl extends ContactPageMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ContactPage)
  }
}
ContactPageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ContactPage)
ContactPageMixin.Class = ContactPageImpl
