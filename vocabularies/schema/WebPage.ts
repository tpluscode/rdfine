import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties, property } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface WebPage extends Schema.CreativeWork, RdfResource {
  breadcrumb: Schema.BreadcrumbList;
  breadcrumbLiteral: string;
  lastReviewed: Date;
  mainContentOfPage: Schema.WebPageElement;
  primaryImageOfPage: Schema.ImageObject;
  relatedLink: rdf.Term;
  reviewedBy: Schema.Organization | Schema.Person;
  significantLink: rdf.Term;
  significantLinks: rdf.Term;
  speakable: Schema.SpeakableSpecification;
  specialty: Schema.Specialty;
}

export default function WebPageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WebPageClass extends CreativeWorkMixin(Resource) implements WebPage {
    @property.resource()
    breadcrumb!: Schema.BreadcrumbList;
    @property.literal({ path: schema.breadcrumb })
    breadcrumbLiteral!: string;
    @property.literal()
    lastReviewed!: Date;
    @property.resource()
    mainContentOfPage!: Schema.WebPageElement;
    @property.resource()
    primaryImageOfPage!: Schema.ImageObject;
    @property()
    relatedLink!: rdf.Term;
    @property.resource()
    reviewedBy!: Schema.Organization | Schema.Person;
    @property()
    significantLink!: rdf.Term;
    @property()
    significantLinks!: rdf.Term;
    @property.resource()
    speakable!: Schema.SpeakableSpecification;
    @property()
    specialty!: Schema.Specialty;
  }
  return WebPageClass
}

class WebPageImpl extends WebPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<WebPage>) {
    super(arg)
    this.types.add(schema.WebPage)
    initializeProperties(this, init)
  }
}
WebPageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WebPage)
WebPageMixin.Class = WebPageImpl
