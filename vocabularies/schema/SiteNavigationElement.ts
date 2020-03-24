import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.SiteNavigationElement)
  }
}
SiteNavigationElementMixin.shouldApply = (r: RdfResource) => r.types.has(schema.SiteNavigationElement)
SiteNavigationElementMixin.Class = SiteNavigationElementImpl
