import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { CommunicateActionMixin } from './CommunicateAction.js';

export interface CheckOutAction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CommunicateAction<D>, RdfResource<D> {
}

export function CheckOutActionMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<CheckOutAction> & RdfResourceCore> & Base {
  @namespace(schema)
  class CheckOutActionClass extends CommunicateActionMixin(Resource) implements Partial<CheckOutAction> {
  }
  return CheckOutActionClass
}

class CheckOutActionImpl extends CheckOutActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CheckOutAction>) {
    super(arg, init)
    this.types.add(schema.CheckOutAction)
  }

  static readonly __mixins: Mixin[] = [CheckOutActionMixin, CommunicateActionMixin];
}
CheckOutActionMixin.appliesTo = schema.CheckOutAction
CheckOutActionMixin.Class = CheckOutActionImpl

export const fromPointer = createFactory<CheckOutAction>([CommunicateActionMixin, CheckOutActionMixin], { types: [schema.CheckOutAction] });
