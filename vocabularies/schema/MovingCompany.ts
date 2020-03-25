import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import HomeAndConstructionBusinessMixin from './HomeAndConstructionBusiness';

export interface MovingCompany extends Schema.HomeAndConstructionBusiness, RdfResource {
}

export default function MovingCompanyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MovingCompanyClass extends HomeAndConstructionBusinessMixin(Resource) implements MovingCompany {
  }
  return MovingCompanyClass
}

class MovingCompanyImpl extends MovingCompanyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<MovingCompany>) {
    super(arg)
    this.types.add(schema.MovingCompany)
    initializeProperties<MovingCompany>(this, init)
  }
}
MovingCompanyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MovingCompany)
MovingCompanyMixin.Class = MovingCompanyImpl
