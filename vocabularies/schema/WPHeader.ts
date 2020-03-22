import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import WebPageElementMixin from './WebPageElement';

export interface WPHeader extends Schema.WebPageElement, RdfResource {
}

export default function WPHeaderMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WPHeaderClass extends WebPageElementMixin(Resource) implements WPHeader {
  }
  return WPHeaderClass
}

class WPHeaderImpl extends WPHeaderMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.WPHeader)
  }
}
WPHeaderMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WPHeader)
WPHeaderMixin.Class = WPHeaderImpl
