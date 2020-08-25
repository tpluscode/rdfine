import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { InteractActionMixin } from './InteractAction';

export interface UnRegisterAction extends Schema.InteractAction, RdfResource {
}

export function UnRegisterActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class UnRegisterActionClass extends InteractActionMixin(Resource) implements UnRegisterAction {
  }
  return UnRegisterActionClass
}

class UnRegisterActionImpl extends UnRegisterActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<UnRegisterAction>) {
    super(arg, init)
    this.types.add(schema.UnRegisterAction)
  }

  static readonly __mixins: Mixin[] = [UnRegisterActionMixin, InteractActionMixin];
}
UnRegisterActionMixin.appliesTo = schema.UnRegisterAction
UnRegisterActionMixin.Class = UnRegisterActionImpl
