import { Constructor, namespace, RdfResource, RdfResourceImpl, property } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import CreativeWorkMixin from './CreativeWork';

export interface WebPage extends Schema.CreativeWork, RdfResource {
  breadcrumb: Schema.BreadcrumbList;
  breadcrumbLiteral: string;
  lastReviewed: Date;
  mainContentOfPage: Schema.WebPageElement;
  primaryImageOfPage: Schema.ImageObject;
  relatedLink: string;
  reviewedBy: Schema.Organization | Schema.Person;
  significantLink: string;
  significantLinks: string;
  speakable: Schema.SpeakableSpecification;
  speakableLiteral: string;
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
    @property.literal()
    relatedLink!: string;
    @property.resource()
    reviewedBy!: Schema.Organization | Schema.Person;
    @property.literal()
    significantLink!: string;
    @property.literal()
    significantLinks!: string;
    @property.resource()
    speakable!: Schema.SpeakableSpecification;
    @property.literal({ path: schema.speakable })
    speakableLiteral!: string;
    @property()
    specialty!: Schema.Specialty;
  }
  return WebPageClass
}

class WebPageImpl extends WebPageMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.WebPage)
  }
}
WebPageMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WebPage)
WebPageMixin.Class = WebPageImpl
