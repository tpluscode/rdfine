import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { WebPageMixin } from './WebPage';

export interface ContactPage<ID extends ResourceNode = ResourceNode> extends Schema.WebPage<ID>, RdfResource<ID> {
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
