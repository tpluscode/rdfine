import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { OrganizationMixin } from './Organization';

export interface WorkersUnion extends Schema.Organization, RdfResource {
}

export function WorkersUnionMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class WorkersUnionClass extends OrganizationMixin(Resource) implements WorkersUnion {
  }
  return WorkersUnionClass
}

class WorkersUnionImpl extends WorkersUnionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<WorkersUnion>) {
    super(arg, init)
    this.types.add(schema.WorkersUnion)
  }
}
WorkersUnionMixin.shouldApply = (r: RdfResource) => r.types.has(schema.WorkersUnion)
WorkersUnionMixin.Class = WorkersUnionImpl
