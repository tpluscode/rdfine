import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
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

  static readonly __mixins: Mixin[] = [MovingCompanyMixin, HomeAndConstructionBusinessMixin];
}
MovingCompanyMixin.appliesTo = schema.MovingCompany
MovingCompanyMixin.Class = MovingCompanyImpl
