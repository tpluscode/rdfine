import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import OrganizationMixin from './Organization';

export interface NGO extends Schema.Organization, RdfResource {
}

export default function NGOMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class NGOClass extends OrganizationMixin(Resource) implements NGO {
  }
  return NGOClass
}

class NGOImpl extends NGOMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<NGO>) {
    super(arg)
    this.types.add(schema.NGO)
    initializeProperties<NGO>(this, init)
  }
}
NGOMixin.shouldApply = (r: RdfResource) => r.types.has(schema.NGO)
NGOMixin.Class = NGOImpl
