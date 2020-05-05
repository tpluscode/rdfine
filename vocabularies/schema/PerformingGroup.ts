import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { OrganizationMixin } from './Organization';

export interface PerformingGroup extends Schema.Organization, RdfResource {
}

export function PerformingGroupMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PerformingGroupClass extends OrganizationMixin(Resource) implements PerformingGroup {
  }
  return PerformingGroupClass
}

class PerformingGroupImpl extends PerformingGroupMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PerformingGroup>) {
    super(arg, init)
    this.types.add(schema.PerformingGroup)
  }

  static readonly __mixins: Mixin[] = [PerformingGroupMixin, OrganizationMixin];
}
PerformingGroupMixin.appliesTo = schema.PerformingGroup
PerformingGroupMixin.Class = PerformingGroupImpl
