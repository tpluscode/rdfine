import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface HealthPlanCostSharingSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  healthPlanCoinsuranceOption: string | undefined;
  healthPlanCoinsuranceRate: number | undefined;
  healthPlanCopay: Schema.PriceSpecification<D> | undefined;
  healthPlanCopayOption: string | undefined;
  healthPlanPharmacyCategory: string | undefined;
}

export function HealthPlanCostSharingSpecificationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<HealthPlanCostSharingSpecification> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HealthPlanCostSharingSpecificationClass extends IntangibleMixin(Resource) implements Partial<HealthPlanCostSharingSpecification> {
    @rdfine.property.literal()
    healthPlanCoinsuranceOption: string | undefined;
    @rdfine.property.literal({ type: Number })
    healthPlanCoinsuranceRate: number | undefined;
    @rdfine.property.resource()
    healthPlanCopay: Schema.PriceSpecification | undefined;
    @rdfine.property.literal()
    healthPlanCopayOption: string | undefined;
    @rdfine.property.literal()
    healthPlanPharmacyCategory: string | undefined;
  }
  return HealthPlanCostSharingSpecificationClass
}

class HealthPlanCostSharingSpecificationImpl extends HealthPlanCostSharingSpecificationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HealthPlanCostSharingSpecification>) {
    super(arg, init)
    this.types.add(schema.HealthPlanCostSharingSpecification)
  }

  static readonly __mixins: Mixin[] = [HealthPlanCostSharingSpecificationMixin, IntangibleMixin];
}
HealthPlanCostSharingSpecificationMixin.appliesTo = schema.HealthPlanCostSharingSpecification
HealthPlanCostSharingSpecificationMixin.Class = HealthPlanCostSharingSpecificationImpl

export const fromPointer = createFactory<HealthPlanCostSharingSpecification>([IntangibleMixin, HealthPlanCostSharingSpecificationMixin], { types: [schema.HealthPlanCostSharingSpecification] });
