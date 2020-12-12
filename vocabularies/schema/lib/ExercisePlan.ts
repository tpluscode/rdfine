import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';
import { PhysicalActivityMixin } from './PhysicalActivity';

export interface ExercisePlan<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, Schema.PhysicalActivity<D>, RdfResource<D> {
  activityDuration: Schema.Duration<D> | Schema.QuantitativeValue<D> | undefined;
  activityFrequency: Schema.QuantitativeValue<D> | undefined;
  activityFrequencyLiteral: string | undefined;
  additionalVariable: string | undefined;
  exerciseType: string | undefined;
  intensity: Schema.QuantitativeValue<D> | undefined;
  intensityLiteral: string | undefined;
  repetitions: Schema.QuantitativeValue<D> | undefined;
  repetitionsLiteral: number | undefined;
  restPeriods: Schema.QuantitativeValue<D> | undefined;
  restPeriodsLiteral: string | undefined;
  workload: Schema.Energy<D> | Schema.QuantitativeValue<D> | undefined;
}

export function ExercisePlanMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ExercisePlan> & RdfResourceCore> & Base {
  @namespace(schema)
  class ExercisePlanClass extends PhysicalActivityMixin(CreativeWorkMixin(Resource)) implements Partial<ExercisePlan> {
    @property.resource()
    activityDuration: Schema.Duration | Schema.QuantitativeValue | undefined;
    @property.resource()
    activityFrequency: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.activityFrequency })
    activityFrequencyLiteral: string | undefined;
    @property.literal()
    additionalVariable: string | undefined;
    @property.literal()
    exerciseType: string | undefined;
    @property.resource()
    intensity: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.intensity })
    intensityLiteral: string | undefined;
    @property.resource()
    repetitions: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.repetitions, type: Number })
    repetitionsLiteral: number | undefined;
    @property.resource()
    restPeriods: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.restPeriods })
    restPeriodsLiteral: string | undefined;
    @property.resource()
    workload: Schema.Energy | Schema.QuantitativeValue | undefined;
  }
  return ExercisePlanClass
}

class ExercisePlanImpl extends ExercisePlanMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ExercisePlan>) {
    super(arg, init)
    this.types.add(schema.ExercisePlan)
  }

  static readonly __mixins: Mixin[] = [ExercisePlanMixin, CreativeWorkMixin, PhysicalActivityMixin];
}
ExercisePlanMixin.appliesTo = schema.ExercisePlan
ExercisePlanMixin.Class = ExercisePlanImpl
