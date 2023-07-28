import * as rdfine from '@tpluscode/rdfine';
import { createFactory, Factory } from '@tpluscode/rdfine/factory';
import { RdfineEnvironment } from '@tpluscode/rdfine/environment';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '../index.js';
import { CommentMixin } from './Comment.js';

export interface Answer<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Comment<D>, rdfine.RdfResource<D> {
  answerExplanation: Schema.Comment<D> | Schema.WebContent<D> | undefined;
}

declare global {
  interface SchemaVocabulary {
    Answer: Factory<Schema.Answer>;
  }
}

export function AnswerMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Answer & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AnswerClass extends CommentMixin(Resource) {
    @rdfine.property.resource()
    answerExplanation: Schema.Comment | Schema.WebContent | undefined;
  }
  return AnswerClass as any
}
AnswerMixin.appliesTo = schema.Answer
AnswerMixin.createFactory = (env: RdfineEnvironment) => createFactory<Answer>([CommentMixin, AnswerMixin], { types: [schema.Answer] }, env)
