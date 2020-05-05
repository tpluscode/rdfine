import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { WebPageMixin } from './WebPage';

export interface ContactPage extends Schema.WebPage, RdfResource {
}

export function ContactPageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ContactPageClass extends WebPageMixin(Resource) implements ContactPage {
  }
  return ContactPageClass
}

class ContactPageImpl extends ContactPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ContactPage>) {
    super(arg, init)
    this.types.add(schema.ContactPage)
  }

  static readonly __mixins: Mixin[] = [ContactPageMixin, WebPageMixin];
}
ContactPageMixin.appliesTo = schema.ContactPage
ContactPageMixin.Class = ContactPageImpl
