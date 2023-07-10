import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CommentMixin } from './Comment.js';

export interface CorrectionComment<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Comment<D>, rdfine.RdfResource<D> {
}

export function CorrectionCommentMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<CorrectionComment & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CorrectionCommentClass extends CommentMixin(Resource) {
  }
  return CorrectionCommentClass as any
}

class CorrectionCommentImpl extends CorrectionCommentMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CorrectionComment>) {
    super(arg, init)
    this.types.add(schema.CorrectionComment)
  }

  static readonly __mixins: Mixin[] = [CorrectionCommentMixin, CommentMixin];
}
CorrectionCommentMixin.appliesTo = schema.CorrectionComment
CorrectionCommentMixin.Class = CorrectionCommentImpl

export const fromPointer = createFactory<CorrectionComment>([CommentMixin, CorrectionCommentMixin], { types: [schema.CorrectionComment] });
