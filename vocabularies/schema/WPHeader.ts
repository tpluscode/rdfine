import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<WPHeader>) {
    super(arg)
    this.types.add(schema.WPHeader)
    initializeProperties<WPHeader>(this, init)
  }
}
WPHeaderMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WPHeader)
WPHeaderMixin.Class = WPHeaderImpl
