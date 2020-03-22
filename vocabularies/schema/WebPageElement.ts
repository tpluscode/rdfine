import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface WebPageElement extends Schema.CreativeWork, RdfResource {
  cssSelector: string;
  xpath: string;
}

export default function WebPageElementMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WebPageElementClass extends CreativeWorkMixin(Resource) implements WebPageElement {
    @property.resource()
    cssSelector!: string;
    @property.resource()
    xpath!: string;
  }
  return WebPageElementClass
}

class WebPageElementImpl extends WebPageElementMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.WebPageElement)
  }
}
WebPageElementMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WebPageElement)
WebPageElementMixin.Class = WebPageElementImpl
