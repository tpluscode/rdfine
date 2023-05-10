import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { WebPageMixin } from './WebPage.js';

export interface FAQPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.WebPage<D>, rdfine.RdfResource<D> {
}

export function FAQPageMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<FAQPage> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class FAQPageClass extends WebPageMixin(Resource) implements Partial<FAQPage> {
  }
  return FAQPageClass
}

class FAQPageImpl extends FAQPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<FAQPage>) {
    super(arg, init)
    this.types.add(schema.FAQPage)
  }

  static readonly __mixins: Mixin[] = [FAQPageMixin, WebPageMixin];
}
FAQPageMixin.appliesTo = schema.FAQPage
FAQPageMixin.Class = FAQPageImpl

export const fromPointer = createFactory<FAQPage>([WebPageMixin, FAQPageMixin], { types: [schema.FAQPage] });
