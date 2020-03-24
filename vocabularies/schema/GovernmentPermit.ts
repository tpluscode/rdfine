import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import PermitMixin from './Permit';

export interface GovernmentPermit extends Schema.Permit, RdfResource {
}

export default function GovernmentPermitMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GovernmentPermitClass extends PermitMixin(Resource) implements GovernmentPermit {
  }
  return GovernmentPermitClass
}

class GovernmentPermitImpl extends GovernmentPermitMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.GovernmentPermit)
  }
}
GovernmentPermitMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GovernmentPermit)
GovernmentPermitMixin.Class = GovernmentPermitImpl
