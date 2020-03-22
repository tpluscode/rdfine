import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import WebPageElementMixin from './WebPageElement';

export interface WPFooter extends Schema.WebPageElement, RdfResource {
}

export default function WPFooterMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WPFooterClass extends WebPageElementMixin(Resource) implements WPFooter {
  }
  return WPFooterClass
}

class WPFooterImpl extends WPFooterMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.WPFooter)
  }
}
WPFooterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WPFooter)
WPFooterMixin.Class = WPFooterImpl
