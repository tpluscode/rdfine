import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<AboutPage>) {
    super(arg, init)
    this.types.add(schema.AboutPage)
  }
}
AboutPageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.AboutPage)
AboutPageMixin.Class = AboutPageImpl
