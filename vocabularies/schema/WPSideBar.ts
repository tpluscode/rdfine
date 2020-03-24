import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import WebPageElementMixin from './WebPageElement';

export interface WPSideBar extends Schema.WebPageElement, RdfResource {
}

export default function WPSideBarMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WPSideBarClass extends WebPageElementMixin(Resource) implements WPSideBar {
  }
  return WPSideBarClass
}

class WPSideBarImpl extends WPSideBarMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<WPSideBar>) {
    super(arg)
    this.types.add(schema.WPSideBar)
    initializeProperties(this, init)
  }
}
WPSideBarMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WPSideBar)
WPSideBarMixin.Class = WPSideBarImpl
