import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { HomeAndConstructionBusinessMixin } from './HomeAndConstructionBusiness';

export interface Electrician extends Schema.HomeAndConstructionBusiness, RdfResource {
}

export function ElectricianMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ElectricianClass extends HomeAndConstructionBusinessMixin(Resource) implements Electrician {
  }
  return ElectricianClass
}

class ElectricianImpl extends ElectricianMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Electrician>) {
    super(arg, init)
    this.types.add(schema.Electrician)
  }
}
ElectricianMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Electrician)
ElectricianMixin.Class = ElectricianImpl
