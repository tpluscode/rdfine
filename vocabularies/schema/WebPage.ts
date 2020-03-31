import { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface WebPage extends Schema.CreativeWork, RdfResource {
  breadcrumb: Schema.BreadcrumbList;
  breadcrumbLiteral: string;
  lastReviewed: Date;
  mainContentOfPage: Schema.WebPageElement;
  primaryImageOfPage: Schema.ImageObject;
  relatedLink: rdf.NamedNode;
  reviewedBy: Schema.Organization | Schema.Person;
  significantLink: rdf.NamedNode;
  significantLinks: rdf.NamedNode;
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
    relatedLink!: rdf.NamedNode;
    @property.resource()
    reviewedBy!: Schema.Organization | Schema.Person;
    @property()
    significantLink!: rdf.NamedNode;
    @property()
    significantLinks!: rdf.NamedNode;
    @property.resource()
    speakable!: Schema.SpeakableSpecification;
    @property()
    specialty!: Schema.Specialty;
  }
  return WebPageClass
}

class WebPageImpl extends WebPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WebPage>) {
    super(arg, init)
    this.types.add(schema.WebPage)
  }
}
WebPageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WebPage)
WebPageMixin.Class = WebPageImpl
