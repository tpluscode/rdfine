import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { InformActionMixin } from './InformAction';

export interface ConfirmAction extends Schema.InformAction, RdfResource {
}

export function ConfirmActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ConfirmActionClass extends InformActionMixin(Resource) implements ConfirmAction {
  }
  return ConfirmActionClass
}

class ConfirmActionImpl extends ConfirmActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ConfirmAction>) {
    super(arg, init)
    this.types.add(schema.ConfirmAction)
  }

  static readonly __mixins: Mixin[] = [ConfirmActionMixin, InformActionMixin];
}
ConfirmActionMixin.appliesTo = schema.ConfirmAction
ConfirmActionMixin.Class = ConfirmActionImpl
