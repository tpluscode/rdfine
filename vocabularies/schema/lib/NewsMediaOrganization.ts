import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OrganizationMixin } from './Organization';

export interface NewsMediaOrganization<ID extends ResourceNode = ResourceNode> extends Schema.Organization<ID>, RdfResource<ID> {
  actionableFeedbackPolicy: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  correctionsPolicy: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  diversityPolicy: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  diversityStaffingReport: Schema.Article<SiblingNode<ID>> | undefined;
  ethicsPolicy: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  masthead: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  missionCoveragePrioritiesPolicy: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  noBylinesPolicy: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  ownershipFundingInfo: Schema.AboutPage<SiblingNode<ID>> | Schema.CreativeWork<SiblingNode<ID>> | undefined;
  ownershipFundingInfoLiteral: string | undefined;
  unnamedSourcesPolicy: Schema.CreativeWork<SiblingNode<ID>> | undefined;
  verificationFactCheckingPolicy: Schema.CreativeWork<SiblingNode<ID>> | undefined;
}

export function NewsMediaOrganizationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class NewsMediaOrganizationClass extends OrganizationMixin(Resource) implements NewsMediaOrganization {
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
