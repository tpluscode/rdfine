import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CreativeWorkMixin } from './CreativeWork.js';

export interface WebPage<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  breadcrumb: Schema.BreadcrumbList<D> | undefined;
  breadcrumbLiteral: string | undefined;
  lastReviewed: Date | undefined;
  mainContentOfPage: Schema.WebPageElement<D> | undefined;
  primaryImageOfPage: Schema.ImageObject<D> | undefined;
  relatedLink: RDF.NamedNode | undefined;
  reviewedBy: Schema.Organization<D> | Schema.Person<D> | undefined;
  significantLink: RDF.NamedNode | undefined;
  significantLinks: RDF.NamedNode | undefined;
  speakable: Schema.SpeakableSpecification<D> | undefined;
  specialty: Schema.Specialty | undefined;
}

export function WebPageMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<WebPage> & RdfResourceCore> & Base {
  @namespace(schema)
  class WebPageClass extends CreativeWorkMixin(Resource) implements Partial<WebPage> {
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

export const fromPointer = createFactory<WebPage>([CreativeWorkMixin, WebPageMixin], { types: [schema.WebPage] });
