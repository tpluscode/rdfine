import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import OrganizationMixin from './Organization';

export interface WorkersUnion extends Schema.Organization, RdfResource {
}

export default function WorkersUnionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WorkersUnionClass extends OrganizationMixin(Resource) implements WorkersUnion {
  }
  return WorkersUnionClass
}

class WorkersUnionImpl extends WorkersUnionMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.WorkersUnion)
  }
}
WorkersUnionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WorkersUnion)
WorkersUnionMixin.Class = WorkersUnionImpl
