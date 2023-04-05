import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { SubstanceMixin } from './Substance.js';

export interface DietarySupplement<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Substance<D>, RdfResource<D> {
  activeIngredient: string | undefined;
  isProprietary: boolean | undefined;
  legalStatus: Schema.DrugLegalStatus<D> | undefined;
  legalStatusLiteral: string | undefined;
  manufacturer: Schema.Organization<D> | undefined;
  maximumIntake: Schema.MaximumDoseSchedule<D> | undefined;
  mechanismOfAction: string | undefined;
  nonProprietaryName: string | undefined;
  proprietaryName: string | undefined;
  recommendedIntake: Schema.RecommendedDoseSchedule<D> | undefined;
  safetyConsideration: string | undefined;
  targetPopulation: string | undefined;
}

export function DietarySupplementMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DietarySupplement> & RdfResourceCore> & Base {
  @namespace(schema)
  class DietarySupplementClass extends SubstanceMixin(Resource) implements Partial<DietarySupplement> {
    @property.literal()
    activeIngredient: string | undefined;
    @property.literal({ type: Boolean })
    isProprietary: boolean | undefined;
    @property.resource()
    legalStatus: Schema.DrugLegalStatus | undefined;
    @property.literal({ path: schema.legalStatus })
    legalStatusLiteral: string | undefined;
    @property.resource()
    manufacturer: Schema.Organization | undefined;
    @property.resource()
    maximumIntake: Schema.MaximumDoseSchedule | undefined;
    @property.literal()
    mechanismOfAction: string | undefined;
    @property.literal()
    nonProprietaryName: string | undefined;
    @property.literal()
    proprietaryName: string | undefined;
    @property.resource()
    recommendedIntake: Schema.RecommendedDoseSchedule | undefined;
    @property.literal()
    safetyConsideration: string | undefined;
    @property.literal()
    targetPopulation: string | undefined;
  }
  return DietarySupplementClass
}

class DietarySupplementImpl extends DietarySupplementMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DietarySupplement>) {
    super(arg, init)
    this.types.add(schema.DietarySupplement)
  }

  static readonly __mixins: Mixin[] = [DietarySupplementMixin, SubstanceMixin];
}
DietarySupplementMixin.appliesTo = schema.DietarySupplement
DietarySupplementMixin.Class = DietarySupplementImpl

export const fromPointer = createFactory<DietarySupplement>([SubstanceMixin, DietarySupplementMixin], { types: [schema.DietarySupplement] });
