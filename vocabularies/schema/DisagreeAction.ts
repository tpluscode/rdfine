import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { ReactActionMixin } from './ReactAction';

export interface DisagreeAction extends Schema.ReactAction, RdfResource {
}

export function DisagreeActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DisagreeActionClass extends ReactActionMixin(Resource) implements DisagreeAction {
  }
  return DisagreeActionClass
}

class DisagreeActionImpl extends DisagreeActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DisagreeAction>) {
    super(arg, init)
    this.types.add(schema.DisagreeAction)
  }

  static readonly __mixins: Mixin[] = [DisagreeActionMixin, ReactActionMixin];
}
DisagreeActionMixin.appliesTo = schema.DisagreeAction
DisagreeActionMixin.Class = DisagreeActionImpl
