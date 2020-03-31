import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<WPSideBar>) {
    super(arg, init)
    this.types.add(schema.WPSideBar)
  }
}
WPSideBarMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WPSideBar)
WPSideBarMixin.Class = WPSideBarImpl
