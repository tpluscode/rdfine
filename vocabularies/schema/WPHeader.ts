import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { WebPageElementMixin } from './WebPageElement';

export interface WPHeader extends Schema.WebPageElement, RdfResource {
}

export function WPHeaderMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [WPHeaderMixin, WebPageElementMixin];
}
WPHeaderMixin.appliesTo = schema.WPHeader
WPHeaderMixin.Class = WPHeaderImpl
