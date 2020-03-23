import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import SportsActivityLocationMixin from './SportsActivityLocation';

export interface ExerciseGym extends Schema.SportsActivityLocation, RdfResource {
}

export default function ExerciseGymMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ExerciseGymClass extends SportsActivityLocationMixin(Resource) implements ExerciseGym {
  }
  return ExerciseGymClass
}

class ExerciseGymImpl extends ExerciseGymMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.ExerciseGym)
  }
}
ExerciseGymMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ExerciseGym)
ExerciseGymMixin.Class = ExerciseGymImpl
