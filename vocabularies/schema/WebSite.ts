import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface WebSite extends Schema.CreativeWork, RdfResource {
  issn: string;
}

export default function WebSiteMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WebSiteClass extends CreativeWorkMixin(Resource) implements WebSite {
    @property.literal()
    issn!: string;
  }
  return WebSiteClass
}

class WebSiteImpl extends WebSiteMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<WebSite>) {
    super(arg)
    this.types.add(schema.WebSite)
    initializeProperties<WebSite>(this, init)
  }
}
WebSiteMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WebSite)
WebSiteMixin.Class = WebSiteImpl
