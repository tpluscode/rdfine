import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OrganizationMixin } from './Organization.js';

export interface NewsMediaOrganization<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, RdfResource<D> {
  actionableFeedbackPolicy: Schema.CreativeWork<D> | undefined;
  correctionsPolicy: Schema.CreativeWork<D> | undefined;
  diversityPolicy: Schema.CreativeWork<D> | undefined;
  diversityStaffingReport: Schema.Article<D> | undefined;
  ethicsPolicy: Schema.CreativeWork<D> | undefined;
  masthead: Schema.CreativeWork<D> | undefined;
  missionCoveragePrioritiesPolicy: Schema.CreativeWork<D> | undefined;
  noBylinesPolicy: Schema.CreativeWork<D> | undefined;
  ownershipFundingInfo: Schema.AboutPage<D> | Schema.CreativeWork<D> | undefined;
  ownershipFundingInfoLiteral: string | undefined;
  unnamedSourcesPolicy: Schema.CreativeWork<D> | undefined;
  verificationFactCheckingPolicy: Schema.CreativeWork<D> | undefined;
}

export function NewsMediaOrganizationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<NewsMediaOrganization> & RdfResourceCore> & Base {
  @namespace(schema)
  class NewsMediaOrganizationClass extends OrganizationMixin(Resource) implements Partial<NewsMediaOrganization> {
    @property.resource()
    actionableFeedbackPolicy: Schema.CreativeWork | undefined;
    @property.resource()
    correctionsPolicy: Schema.CreativeWork | undefined;
    @property.resource()
    diversityPolicy: Schema.CreativeWork | undefined;
    @property.resource()
    diversityStaffingReport: Schema.Article | undefined;
    @property.resource()
    ethicsPolicy: Schema.CreativeWork | undefined;
    @property.resource()
    masthead: Schema.CreativeWork | undefined;
    @property.resource()
    missionCoveragePrioritiesPolicy: Schema.CreativeWork | undefined;
    @property.resource()
    noBylinesPolicy: Schema.CreativeWork | undefined;
    @property.resource()
    ownershipFundingInfo: Schema.AboutPage | Schema.CreativeWork | undefined;
    @property.literal({ path: schema.ownershipFundingInfo })
    ownershipFundingInfoLiteral: string | undefined;
    @property.resource()
    unnamedSourcesPolicy: Schema.CreativeWork | undefined;
    @property.resource()
    verificationFactCheckingPolicy: Schema.CreativeWork | undefined;
  }
  return NewsMediaOrganizationClass
}

class NewsMediaOrganizationImpl extends NewsMediaOrganizationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<NewsMediaOrganization>) {
    super(arg, init)
    this.types.add(schema.NewsMediaOrganization)
  }

  static readonly __mixins: Mixin[] = [NewsMediaOrganizationMixin, OrganizationMixin];
}
NewsMediaOrganizationMixin.appliesTo = schema.NewsMediaOrganization
NewsMediaOrganizationMixin.Class = NewsMediaOrganizationImpl

export const fromPointer = createFactory<NewsMediaOrganization>([OrganizationMixin, NewsMediaOrganizationMixin], { types: [schema.NewsMediaOrganization] });
