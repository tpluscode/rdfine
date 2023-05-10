import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { WebPageMixin } from './WebPage.js';

export interface ContactPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPage<D>, rdfine.RdfResource<D> {
}

export function ContactPageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ContactPage> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ContactPageClass extends WebPageMixin(Resource) implements Partial<ContactPage> {
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

export const fromPointer = createFactory<ContactPage>([WebPageMixin, ContactPageMixin], { types: [schema.ContactPage] });
