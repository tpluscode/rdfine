import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface HealthInsurancePlan<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  benefitsSummaryUrl: RDF.NamedNode | undefined;
  contactPoint: Schema.ContactPoint<D> | undefined;
  healthPlanDrugOption: string | undefined;
  healthPlanDrugTier: string | undefined;
  healthPlanId: string | undefined;
  healthPlanMarketingUrl: RDF.NamedNode | undefined;
  includesHealthPlanFormulary: Schema.HealthPlanFormulary<D> | undefined;
  includesHealthPlanNetwork: Schema.HealthPlanNetwork<D> | undefined;
  usesHealthPlanIdStandard: string | undefined;
  usesHealthPlanIdStandardTerm: RDF.NamedNode | undefined;
}

export function HealthInsurancePlanMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<HealthInsurancePlan> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HealthInsurancePlanClass extends IntangibleMixin(Resource) implements Partial<HealthInsurancePlan> {
    @rdfine.property()
    benefitsSummaryUrl: RDF.NamedNode | undefined;
    @rdfine.property.resource()
    contactPoint: Schema.ContactPoint | undefined;
    @rdfine.property.literal()
    healthPlanDrugOption: string | undefined;
    @rdfine.property.literal()
    healthPlanDrugTier: string | undefined;
    @rdfine.property.literal()
    healthPlanId: string | undefined;
    @rdfine.property()
    healthPlanMarketingUrl: RDF.NamedNode | undefined;
    @rdfine.property.resource()
    includesHealthPlanFormulary: Schema.HealthPlanFormulary | undefined;
    @rdfine.property.resource()
    includesHealthPlanNetwork: Schema.HealthPlanNetwork | undefined;
    @rdfine.property.literal()
    usesHealthPlanIdStandard: string | undefined;
    @rdfine.property({ path: schema.usesHealthPlanIdStandard })
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

export const fromPointer = createFactory<HealthInsurancePlan>([IntangibleMixin, HealthInsurancePlanMixin], { types: [schema.HealthInsurancePlan] });
