import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CommunicateActionMixin } from './CommunicateAction.js';

export interface ReplyAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CommunicateAction<D>, rdfine.RdfResource<D> {
  resultComment: Schema.Comment<D> | undefined;
}

export function ReplyActionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ReplyAction & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ReplyActionClass extends CommunicateActionMixin(Resource) {
    @rdfine.property.resource()
    resultComment: Schema.Comment | undefined;
  }
  return ReplyActionClass as any
}

class ReplyActionImpl extends ReplyActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ReplyAction>) {
    super(arg, init)
    this.types.add(schema.ReplyAction)
  }

  static readonly __mixins: Mixin[] = [ReplyActionMixin, CommunicateActionMixin];
}
ReplyActionMixin.appliesTo = schema.ReplyAction
ReplyActionMixin.Class = ReplyActionImpl

export const fromPointer = createFactory<ReplyAction>([CommunicateActionMixin, ReplyActionMixin], { types: [schema.ReplyAction] });
