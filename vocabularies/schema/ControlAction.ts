import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ActionMixin } from './Action';

export interface ControlAction extends Schema.Action, RdfResource {
}

export function ControlActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ControlActionClass extends ActionMixin(Resource) implements ControlAction {
  }
  return ControlActionClass
}

class ControlActionImpl extends ControlActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ControlAction>) {
    super(arg, init)
    this.types.add(schema.ControlAction)
  }

  static readonly __mixins: Mixin[] = [ControlActionMixin, ActionMixin];
}
ControlActionMixin.appliesTo = schema.ControlAction
ControlActionMixin.Class = ControlActionImpl
