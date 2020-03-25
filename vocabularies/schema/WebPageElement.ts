import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface WebPageElement extends Schema.CreativeWork, RdfResource {
  cssSelector: string;
  xpath: string;
}

export default function WebPageElementMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WebPageElementClass extends CreativeWorkMixin(Resource) implements WebPageElement {
    @property.literal()
    cssSelector!: string;
    @property.literal()
    xpath!: string;
  }
  return WebPageElementClass
}

class WebPageElementImpl extends WebPageElementMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<WebPageElement>) {
    super(arg)
    this.types.add(schema.WebPageElement)
    initializeProperties<WebPageElement>(this, init)
  }
}
WebPageElementMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WebPageElement)
WebPageElementMixin.Class = WebPageElementImpl
