import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface WebSite extends Schema.CreativeWork, RdfResource {
  issn: string;
}

export function WebSiteMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WebSiteClass extends CreativeWorkMixin(Resource) implements WebSite {
    @property.literal()
    issn!: string;
  }
  return WebSiteClass
}

class WebSiteImpl extends WebSiteMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WebSite>) {
    super(arg, init)
    this.types.add(schema.WebSite)
  }
}
WebSiteMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WebSite)
WebSiteMixin.Class = WebSiteImpl
