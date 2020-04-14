import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<SiteNavigationElement>) {
    super(arg, init)
    this.types.add(schema.SiteNavigationElement)
  }
}
SiteNavigationElementMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SiteNavigationElement)
SiteNavigationElementMixin.Class = SiteNavigationElementImpl
