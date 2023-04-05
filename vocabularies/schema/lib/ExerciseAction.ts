import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PlayActionMixin } from './PlayAction.js';

export interface ExerciseAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.PlayAction<D>, RdfResource<D> {
  course: Schema.Place<D> | undefined;
  diet: Schema.Diet<D> | undefined;
  distance: Schema.Distance<D> | undefined;
  exerciseCourse: Schema.Place<D> | undefined;
  exercisePlan: Schema.ExercisePlan<D> | undefined;
  exerciseRelatedDiet: Schema.Diet<D> | undefined;
  exerciseType: string | undefined;
  fromLocation: Schema.Place<D> | undefined;
  opponent: Schema.Person<D> | undefined;
  sportsActivityLocation: Schema.SportsActivityLocation<D> | undefined;
  sportsEvent: Schema.SportsEvent<D> | undefined;
  sportsTeam: Schema.SportsTeam<D> | undefined;
  toLocation: Schema.Place<D> | undefined;
}

export function ExerciseActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ExerciseAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class ExerciseActionClass extends PlayActionMixin(Resource) implements Partial<ExerciseAction> {
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

export const fromPointer = createFactory<ExerciseAction>([PlayActionMixin, ExerciseActionMixin], { types: [schema.ExerciseAction] });
