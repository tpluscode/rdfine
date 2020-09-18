import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PlayActionMixin } from './PlayAction';

export interface ExerciseAction extends Schema.PlayAction, RdfResource {
  course: Schema.Place | undefined;
  distance: Schema.Distance | undefined;
  exerciseCourse: Schema.Place | undefined;
  fromLocation: Schema.Place | undefined;
  opponent: Schema.Person | undefined;
  sportsActivityLocation: Schema.SportsActivityLocation | undefined;
  sportsEvent: Schema.SportsEvent | undefined;
  sportsTeam: Schema.SportsTeam | undefined;
  toLocation: Schema.Place | undefined;
}

export function ExerciseActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ExerciseActionClass extends PlayActionMixin(Resource) implements ExerciseAction {
    @property.resource()
    course: Schema.Place | undefined;
    @property.resource()
    distance: Schema.Distance | undefined;
    @property.resource()
    exerciseCourse: Schema.Place | undefined;
    @property.resource()
    fromLocation: Schema.Place | undefined;
    @property.resource()
    opponent: Schema.Person | undefined;
    @property.resource()
    sportsActivityLocation: Schema.SportsActivityLocation | undefined;
    @property.resource()
    sportsEvent: Schema.SportsEvent | undefined;
    @property.resource()
    sportsTeam: Schema.SportsTeam | undefined;
    @property.resource()
    toLocation: Schema.Place | undefined;
  }
  return ExerciseActionClass
}

class ExerciseActionImpl extends ExerciseActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ExerciseAction>) {
    super(arg, init)
    this.types.add(schema.ExerciseAction)
  }

  static readonly __mixins: Mixin[] = [ExerciseActionMixin, PlayActionMixin];
}
ExerciseActionMixin.appliesTo = schema.ExerciseAction
ExerciseActionMixin.Class = ExerciseActionImpl
