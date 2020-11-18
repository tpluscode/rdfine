import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PlayActionMixin } from './PlayAction';

export interface ExerciseAction<ID extends ResourceNode = ResourceNode> extends Schema.PlayAction<ID>, RdfResource<ID> {
  course: Schema.Place<SiblingNode<ID>> | undefined;
  diet: Schema.Diet<SiblingNode<ID>> | undefined;
  distance: Schema.Distance<SiblingNode<ID>> | undefined;
  exerciseCourse: Schema.Place<SiblingNode<ID>> | undefined;
  exercisePlan: Schema.ExercisePlan<SiblingNode<ID>> | undefined;
  exerciseRelatedDiet: Schema.Diet<SiblingNode<ID>> | undefined;
  exerciseType: string | undefined;
  fromLocation: Schema.Place<SiblingNode<ID>> | undefined;
  opponent: Schema.Person<SiblingNode<ID>> | undefined;
  sportsActivityLocation: Schema.SportsActivityLocation<SiblingNode<ID>> | undefined;
  sportsEvent: Schema.SportsEvent<SiblingNode<ID>> | undefined;
  sportsTeam: Schema.SportsTeam<SiblingNode<ID>> | undefined;
  toLocation: Schema.Place<SiblingNode<ID>> | undefined;
}

export function ExerciseActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ExerciseActionClass extends PlayActionMixin(Resource) implements ExerciseAction {
    @property.resource()
    course: Schema.Place | undefined;
    @property.resource()
    diet: Schema.Diet | undefined;
    @property.resource()
    distance: Schema.Distance | undefined;
    @property.resource()
    exerciseCourse: Schema.Place | undefined;
    @property.resource()
    exercisePlan: Schema.ExercisePlan | undefined;
    @property.resource()
    exerciseRelatedDiet: Schema.Diet | undefined;
    @property.literal()
    exerciseType: string | undefined;
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
