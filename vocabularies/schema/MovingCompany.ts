import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness';

export interface MovingCompany extends Schema.HomeAndConstructionBusiness, RdfResource {
}

export function MovingCompanyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MovingCompanyClass extends HomeAndConstructionBusinessMixin(Resource) implements MovingCompany {
  }
  return MovingCompanyClass
}

class MovingCompanyImpl extends MovingCompanyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MovingCompany>) {
    super(arg, init)
    this.types.add(schema.MovingCompany)
  }
}
MovingCompanyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.MovingCompany)
MovingCompanyMixin.Class = MovingCompanyImpl
