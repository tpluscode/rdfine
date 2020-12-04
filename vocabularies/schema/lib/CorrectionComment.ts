import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CommentMixin } from './Comment';

export interface CorrectionComment<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Comment<D>, RdfResource<D> {
}

export function CorrectionCommentMixin<Base extends Constructor>(Resource: Base): Constructor<CorrectionComment> & Base {
  @namespace(schema)
  class CorrectionCommentClass extends CommentMixin(Resource) implements CorrectionComment {
  }
  return CorrectionCommentClass
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
