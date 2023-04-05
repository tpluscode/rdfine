import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CommentMixin } from './Comment';

export interface Answer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Comment<D>, RdfResource<D> {
  answerExplanation: Schema.Comment<D> | Schema.WebContent<D> | undefined;
}

export function AnswerMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Answer> & RdfResourceCore> & Base {
  @namespace(schema)
  class AnswerClass extends CommentMixin(Resource) implements Partial<Answer> {
    @property.resource()
    answerExplanation: Schema.Comment | Schema.WebContent | undefined;
  }
  return AnswerClass
}

class AnswerImpl extends AnswerMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Answer>) {
    super(arg, init)
    this.types.add(schema.Answer)
  }

  static readonly __mixins: Mixin[] = [AnswerMixin, CommentMixin];
}
AnswerMixin.appliesTo = schema.Answer
AnswerMixin.Class = AnswerImpl

export const fromPointer = createFactory<Answer>([CommentMixin, AnswerMixin], { types: [schema.Answer] });
