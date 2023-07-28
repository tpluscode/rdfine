import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LearningResourceMixin } from './LearningResource.js';

export interface Quiz<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LearningResource<D>, rdfine.RdfResource<D> {
}

export function QuizMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Quiz & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class QuizClass extends LearningResourceMixin(Resource) {
  }
  return QuizClass as any
}

class QuizImpl extends QuizMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Quiz>) {
    super(arg, init)
    this.types.add(schema.Quiz)
  }

  static readonly __mixins: Mixin[] = [QuizMixin, LearningResourceMixin];
}
QuizMixin.appliesTo = schema.Quiz
QuizMixin.Class = QuizImpl

export const fromPointer = createFactory<Quiz>([LearningResourceMixin, QuizMixin], { types: [schema.Quiz] });
