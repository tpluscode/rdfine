import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import GovernmentBuildingMixin from './GovernmentBuilding';

export interface Courthouse extends Schema.GovernmentBuilding, RdfResource {
}

export default function CourthouseMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CourthouseClass extends GovernmentBuildingMixin(Resource) implements Courthouse {
  }
  return CourthouseClass
}

class CourthouseImpl extends CourthouseMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Courthouse>) {
    super(arg)
    this.types.add(schema.Courthouse)
    initializeProperties(this, init)
  }
}
CourthouseMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Courthouse)
CourthouseMixin.Class = CourthouseImpl
