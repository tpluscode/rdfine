import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PlayActionMixin } from './PlayAction';

export interface ExerciseAction extends Schema.PlayAction, RdfResource {
  course: Schema.Place;
  distance: Schema.Distance;
  exerciseCourse: Schema.Place;
  fromLocation: Schema.Place;
  opponent: Schema.Person;
  sportsActivityLocation: Schema.SportsActivityLocation;
  sportsEvent: Schema.SportsEvent;
  sportsTeam: Schema.SportsTeam;
  toLocation: Schema.Place;
}

export function ExerciseActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ExerciseActionClass extends PlayActionMixin(Resource) implements ExerciseAction {
    @property.resource()
    course!: Schema.Place;
    @property.resource()
    distance!: Schema.Distance;
    @property.resource()
    exerciseCourse!: Schema.Place;
    @property.resource()
    fromLocation!: Schema.Place;
    @property.resource()
    opponent!: Schema.Person;
    @property.resource()
    sportsActivityLocation!: Schema.SportsActivityLocation;
    @property.resource()
    sportsEvent!: Schema.SportsEvent;
    @property.resource()
    sportsTeam!: Schema.SportsTeam;
    @property.resource()
    toLocation!: Schema.Place;
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
