import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<WPFooter>) {
    super(arg)
    this.types.add(schema.WPFooter)
    initializeProperties<WPFooter>(this, init)
  }
}
WPFooterMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WPFooter)
WPFooterMixin.Class = WPFooterImpl
