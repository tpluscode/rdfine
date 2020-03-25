import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<WorkersUnion>) {
    super(arg)
    this.types.add(schema.WorkersUnion)
    initializeProperties<WorkersUnion>(this, init)
  }
}
WorkersUnionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WorkersUnion)
WorkersUnionMixin.Class = WorkersUnionImpl
