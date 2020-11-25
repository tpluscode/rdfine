import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { SportsActivityLocationMixin } from './SportsActivityLocation';

export interface ExerciseGym<ID extends ResourceNode = ResourceNode> extends Schema.SportsActivityLocation<ID>, RdfResource<ID> {
}

export function ExerciseGymMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [ExerciseGymMixin, SportsActivityLocationMixin];
}
ExerciseGymMixin.appliesTo = schema.ExerciseGym
ExerciseGymMixin.Class = ExerciseGymImpl
