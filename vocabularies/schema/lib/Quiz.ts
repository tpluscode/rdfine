import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LearningResourceMixin } from './LearningResource';

export interface Quiz<ID extends ResourceNode = ResourceNode> extends Schema.LearningResource<ID>, RdfResource<ID> {
}

export function QuizMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class QuizClass extends LearningResourceMixin(Resource) implements Quiz {
  }
  return QuizClass
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
