import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<WPHeader>) {
    super(arg, init)
    this.types.add(schema.WPHeader)
  }
}
WPHeaderMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WPHeader)
WPHeaderMixin.Class = WPHeaderImpl
