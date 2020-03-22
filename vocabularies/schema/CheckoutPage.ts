import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import WebPageMixin from './WebPage';

export interface CheckoutPage extends Schema.WebPage, RdfResource {
}

export default function CheckoutPageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CheckoutPageClass extends WebPageMixin(Resource) implements CheckoutPage {
  }
  return CheckoutPageClass
}

class CheckoutPageImpl extends CheckoutPageMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.CheckoutPage)
  }
}
CheckoutPageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.CheckoutPage)
CheckoutPageMixin.Class = CheckoutPageImpl
