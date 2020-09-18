import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface WebPage extends Schema.CreativeWork, RdfResource {
  breadcrumb: Schema.BreadcrumbList | undefined;
  breadcrumbLiteral: string | undefined;
  lastReviewed: Date | undefined;
  mainContentOfPage: Schema.WebPageElement | undefined;
  primaryImageOfPage: Schema.ImageObject | undefined;
  relatedLink: RDF.NamedNode | undefined;
  reviewedBy: Schema.Organization | Schema.Person | undefined;
  significantLink: RDF.NamedNode | undefined;
  significantLinks: RDF.NamedNode | undefined;
  speakable: Schema.SpeakableSpecification | undefined;
  specialty: Schema.Specialty | undefined;
}

export function WebPageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WebPageClass extends CreativeWorkMixin(Resource) implements WebPage {
    @property.resource()
    breadcrumb: Schema.BreadcrumbList | undefined;
    @property.literal({ path: schema.breadcrumb })
    breadcrumbLiteral: string | undefined;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    lastReviewed: Date | undefined;
    @property.resource()
    mainContentOfPage: Schema.WebPageElement | undefined;
    @property.resource()
    primaryImageOfPage: Schema.ImageObject | undefined;
    @property()
    relatedLink: RDF.NamedNode | undefined;
    @property.resource()
    reviewedBy: Schema.Organization | Schema.Person | undefined;
    @property()
    significantLink: RDF.NamedNode | undefined;
    @property()
    significantLinks: RDF.NamedNode | undefined;
    @property.resource()
    speakable: Schema.SpeakableSpecification | undefined;
    @property()
    specialty: Schema.Specialty | undefined;
  }
  return WebPageClass
}

class WebPageImpl extends WebPageMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WebPage>) {
    super(arg, init)
    this.types.add(schema.WebPage)
  }

  static readonly __mixins: Mixin[] = [WebPageMixin, CreativeWorkMixin];
}
WebPageMixin.appliesTo = schema.WebPage
WebPageMixin.Class = WebPageImpl
