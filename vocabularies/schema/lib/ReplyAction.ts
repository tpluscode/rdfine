import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CommunicateActionMixin } from './CommunicateAction';

export interface ReplyAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CommunicateAction<D>, RdfResource<D> {
  resultComment: Schema.Comment<D> | undefined;
}

export function ReplyActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ReplyAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class ReplyActionClass extends CommunicateActionMixin(Resource) implements Partial<ReplyAction> {
    @property.resource()
    resultComment: Schema.Comment | undefined;
  }
  return ReplyActionClass
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
