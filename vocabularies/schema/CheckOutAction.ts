import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { CommunicateActionMixin } from './CommunicateAction';

export interface CheckOutAction extends Schema.CommunicateAction, RdfResource {
}

export function CheckOutActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CheckOutActionClass extends CommunicateActionMixin(Resource) implements CheckOutAction {
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
