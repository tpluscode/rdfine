import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface HealthInsurancePlan<ID extends ResourceNode = ResourceNode> extends Schema.Intangible<ID>, RdfResource<ID> {
  benefitsSummaryUrl: RDF.NamedNode | undefined;
  contactPoint: Schema.ContactPoint<SiblingNode<ID>> | undefined;
  healthPlanDrugOption: string | undefined;
  healthPlanDrugTier: string | undefined;
  healthPlanId: string | undefined;
  healthPlanMarketingUrl: RDF.NamedNode | undefined;
  includesHealthPlanFormulary: Schema.HealthPlanFormulary<SiblingNode<ID>> | undefined;
  includesHealthPlanNetwork: Schema.HealthPlanNetwork<SiblingNode<ID>> | undefined;
  usesHealthPlanIdStandard: string | undefined;
  usesHealthPlanIdStandardTerm: RDF.NamedNode | undefined;
}

export function HealthInsurancePlanMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HealthInsurancePlanClass extends IntangibleMixin(Resource) implements HealthInsurancePlan {
    @property()
    benefitsSummaryUrl: RDF.NamedNode | undefined;
    @property.resource()
    contactPoint: Schema.ContactPoint | undefined;
    @property.literal()
    healthPlanDrugOption: string | undefined;
    @property.literal()
    healthPlanDrugTier: string | undefined;
    @property.literal()
    healthPlanId: string | undefined;
    @property()
    healthPlanMarketingUrl: RDF.NamedNode | undefined;
    @property.resource()
    includesHealthPlanFormulary: Schema.HealthPlanFormulary | undefined;
    @property.resource()
    includesHealthPlanNetwork: Schema.HealthPlanNetwork | undefined;
    @property.literal()
    usesHealthPlanIdStandard: string | undefined;
    @property({ path: schema.usesHealthPlanIdStandard })
    usesHealthPlanIdStandardTerm: RDF.NamedNode | undefined;
  }
  return HealthInsurancePlanClass
}

class HealthInsurancePlanImpl extends HealthInsurancePlanMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HealthInsurancePlan>) {
    super(arg, init)
    this.types.add(schema.HealthInsurancePlan)
  }

  static readonly __mixins: Mixin[] = [HealthInsurancePlanMixin, IntangibleMixin];
}
HealthInsurancePlanMixin.appliesTo = schema.HealthInsurancePlan
HealthInsurancePlanMixin.Class = HealthInsurancePlanImpl
