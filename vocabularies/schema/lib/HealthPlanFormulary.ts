import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { IntangibleMixin } from './Intangible.js';

export interface HealthPlanFormulary<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, rdfine.RdfResource<D> {
  healthPlanCostSharing: boolean | undefined;
  healthPlanDrugTier: string | undefined;
  offersPrescriptionByMail: boolean | undefined;
}

export function HealthPlanFormularyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<HealthPlanFormulary> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class HealthPlanFormularyClass extends IntangibleMixin(Resource) implements Partial<HealthPlanFormulary> {
    @rdfine.property.literal({ type: Boolean })
    healthPlanCostSharing: boolean | undefined;
    @rdfine.property.literal()
    healthPlanDrugTier: string | undefined;
    @rdfine.property.literal({ type: Boolean })
    offersPrescriptionByMail: boolean | undefined;
  }
  return HealthPlanFormularyClass
}

class HealthPlanFormularyImpl extends HealthPlanFormularyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<HealthPlanFormulary>) {
    super(arg, init)
    this.types.add(schema.HealthPlanFormulary)
  }

  static readonly __mixins: Mixin[] = [HealthPlanFormularyMixin, IntangibleMixin];
}
HealthPlanFormularyMixin.appliesTo = schema.HealthPlanFormulary
HealthPlanFormularyMixin.Class = HealthPlanFormularyImpl

export const fromPointer = createFactory<HealthPlanFormulary>([IntangibleMixin, HealthPlanFormularyMixin], { types: [schema.HealthPlanFormulary] });
