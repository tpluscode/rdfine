import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface HealthPlanCostSharingSpecification<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  healthPlanCoinsuranceOption: string | undefined;
  healthPlanCoinsuranceRate: number | undefined;
  healthPlanCopay: Schema.PriceSpecification<D> | undefined;
  healthPlanCopayOption: string | undefined;
  healthPlanPharmacyCategory: string | undefined;
}

export function HealthPlanCostSharingSpecificationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HealthPlanCostSharingSpecification> & RdfResourceCore> & Base {
  @namespace(schema)
  class HealthPlanCostSharingSpecificationClass extends IntangibleMixin(Resource) implements Partial<HealthPlanCostSharingSpecification> {
    @property.literal()
    healthPlanCoinsuranceOption: string | undefined;
    @property.literal({ type: Number })
    healthPlanCoinsuranceRate: number | undefined;
    @property.resource()
    healthPlanCopay: Schema.PriceSpecification | undefined;
    @property.literal()
    healthPlanCopayOption: string | undefined;
    @property.literal()
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
