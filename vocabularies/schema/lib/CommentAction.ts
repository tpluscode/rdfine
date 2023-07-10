import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CommunicateActionMixin } from './CommunicateAction.js';

export interface CommentAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CommunicateAction<D>, rdfine.RdfResource<D> {
  resultComment: Schema.Comment<D> | undefined;
}

export function CommentActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<CommentAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CommentActionClass extends CommunicateActionMixin(Resource) {
    @rdfine.property.resource()
    resultComment: Schema.Comment | undefined;
  }
  return CommentActionClass as any
}

class CommentActionImpl extends CommentActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CommentAction>) {
    super(arg, init)
    this.types.add(schema.CommentAction)
  }

  static readonly __mixins: Mixin[] = [CommentActionMixin, CommunicateActionMixin];
}
CommentActionMixin.appliesTo = schema.CommentAction
CommentActionMixin.Class = CommentActionImpl

export const fromPointer = createFactory<CommentAction>([CommunicateActionMixin, CommentActionMixin], { types: [schema.CommentAction] });
