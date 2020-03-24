import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import WebPageElementMixin from './WebPageElement';

export interface SiteNavigationElement extends Schema.WebPageElement, RdfResource {
}

export default function SiteNavigationElementMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SiteNavigationElementClass extends WebPageElementMixin(Resource) implements SiteNavigationElement {
  }
  return SiteNavigationElementClass
}

class SiteNavigationElementImpl extends SiteNavigationElementMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<SiteNavigationElement>) {
    super(arg)
    this.types.add(schema.SiteNavigationElement)
    initializeProperties(this, init)
  }
}
SiteNavigationElementMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SiteNavigationElement)
SiteNavigationElementMixin.Class = SiteNavigationElementImpl
