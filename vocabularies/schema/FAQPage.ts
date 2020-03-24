import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import WebPageMixin from './WebPage';

export interface FAQPage extends Schema.WebPage, RdfResource {
}

export default function FAQPageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class FAQPageClass extends WebPageMixin(Resource) implements FAQPage {
  }
  return FAQPageClass
}

class FAQPageImpl extends FAQPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<FAQPage>) {
    super(arg)
    this.types.add(schema.FAQPage)
    initializeProperties(this, init)
  }
}
FAQPageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.FAQPage)
FAQPageMixin.Class = FAQPageImpl
