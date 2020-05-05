import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ControlActionMixin } from './ControlAction';

export interface DeactivateAction extends Schema.ControlAction, RdfResource {
}

export function DeactivateActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DeactivateActionClass extends ControlActionMixin(Resource) implements DeactivateAction {
  }
  return DeactivateActionClass
}

class DeactivateActionImpl extends DeactivateActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DeactivateAction>) {
    super(arg, init)
    this.types.add(schema.DeactivateAction)
  }

  static readonly __mixins: Mixin[] = [DeactivateActionMixin, ControlActionMixin];
}
DeactivateActionMixin.appliesTo = schema.DeactivateAction
DeactivateActionMixin.Class = DeactivateActionImpl
