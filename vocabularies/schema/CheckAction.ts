import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { FindActionMixin } from './FindAction';

export interface CheckAction extends Schema.FindAction, RdfResource {
}

export function CheckActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CheckActionClass extends FindActionMixin(Resource) implements CheckAction {
  }
  return CheckActionClass
}

class CheckActionImpl extends CheckActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<CheckAction>) {
    super(arg, init)
    this.types.add(schema.CheckAction)
  }

  static readonly __mixins: Mixin[] = [CheckActionMixin, FindActionMixin];
}
CheckActionMixin.appliesTo = schema.CheckAction
CheckActionMixin.Class = CheckActionImpl
