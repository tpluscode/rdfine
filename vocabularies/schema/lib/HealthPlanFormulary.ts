import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { IntangibleMixin } from './Intangible';

export interface HealthPlanFormulary<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Intangible<D>, RdfResource<D> {
  healthPlanCostSharing: boolean | undefined;
  healthPlanDrugTier: string | undefined;
  offersPrescriptionByMail: boolean | undefined;
}

export function HealthPlanFormularyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<HealthPlanFormulary> & RdfResourceCore> & Base {
  @namespace(schema)
  class HealthPlanFormularyClass extends IntangibleMixin(Resource) implements Partial<HealthPlanFormulary> {
    @property.literal({ type: Boolean })
    healthPlanCostSharing: boolean | undefined;
    @property.literal()
    healthPlanDrugTier: string | undefined;
    @property.literal({ type: Boolean })
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
