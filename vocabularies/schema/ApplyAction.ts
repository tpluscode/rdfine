import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import OrganizeActionMixin from './OrganizeAction';

export interface ApplyAction extends Schema.OrganizeAction, RdfResource {
}

export default function ApplyActionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ApplyActionClass extends OrganizeActionMixin(Resource) implements ApplyAction {
  }
  return ApplyActionClass
}

class ApplyActionImpl extends ApplyActionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ApplyAction>) {
    super(arg, init)
    this.types.add(schema.ApplyAction)
  }
}
ApplyActionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.ApplyAction)
ApplyActionMixin.Class = ApplyActionImpl
