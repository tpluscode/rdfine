import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import WebPageMixin from './WebPage';

export interface AboutPage extends Schema.WebPage, RdfResource {
}

export default function AboutPageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AboutPageClass extends WebPageMixin(Resource) implements AboutPage {
  }
  return AboutPageClass
}

class AboutPageImpl extends AboutPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<AboutPage>) {
    super(arg)
    this.types.add(schema.AboutPage)
    initializeProperties<AboutPage>(this, init)
  }
}
AboutPageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AboutPage)
AboutPageMixin.Class = AboutPageImpl
