import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CreativeWorkMixin } from './CreativeWork';

export interface WebPage extends Schema.CreativeWork, RdfResource {
  breadcrumb: Schema.BreadcrumbList;
  breadcrumbLiteral: string;
  lastReviewed: Date;
  mainContentOfPage: Schema.WebPageElement;
  primaryImageOfPage: Schema.ImageObject;
  relatedLink: RDF.NamedNode;
  reviewedBy: Schema.Organization | Schema.Person;
  significantLink: RDF.NamedNode;
  significantLinks: RDF.NamedNode;
  speakable: Schema.SpeakableSpecification;
  specialty: Schema.Specialty;
}

export function WebPageMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WebPageClass extends CreativeWorkMixin(Resource) implements WebPage {
    @property.resource()
    breadcrumb!: Schema.BreadcrumbList;
    @property.literal({ path: schema.breadcrumb })
    breadcrumbLiteral!: string;
    @property.literal({ type: Date, datatype: $rdf.namedNode('http://www.w3.org/2001/XMLSchema#date') })
    lastReviewed!: Date;
    @property.resource()
    mainContentOfPage!: Schema.WebPageElement;
    @property.resource()
    primaryImageOfPage!: Schema.ImageObject;
    @property()
    relatedLink!: RDF.NamedNode;
    @property.resource()
    reviewedBy!: Schema.Organization | Schema.Person;
    @property()
    significantLink!: RDF.NamedNode;
    @property()
    significantLinks!: RDF.NamedNode;
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

  static readonly __mixins: Mixin[] = [WebPageMixin, CreativeWorkMixin];
}
WebPageMixin.appliesTo = schema.WebPage
WebPageMixin.Class = WebPageImpl
