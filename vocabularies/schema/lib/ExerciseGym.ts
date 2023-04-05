import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { SportsActivityLocationMixin } from './SportsActivityLocation.js';

export interface ExerciseGym<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.SportsActivityLocation<D>, RdfResource<D> {
}

export function ExerciseGymMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ExerciseGym> & RdfResourceCore> & Base {
  @namespace(schema)
  class ExerciseGymClass extends SportsActivityLocationMixin(Resource) implements Partial<ExerciseGym> {
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

export const fromPointer = createFactory<ExerciseGym>([SportsActivityLocationMixin, ExerciseGymMixin], { types: [schema.ExerciseGym] });
