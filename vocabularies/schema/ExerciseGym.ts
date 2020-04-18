import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<ExerciseGym>) {
    super(arg, init)
    this.types.add(schema.ExerciseGym)
  }
}
ExerciseGymMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ExerciseGym)
ExerciseGymMixin.Class = ExerciseGymImpl
