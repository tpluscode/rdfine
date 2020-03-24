import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import HomeAndConstructionBusinessMixin from './HomeAndConstructionBusiness';

export interface Electrician extends Schema.HomeAndConstructionBusiness, RdfResource {
}

export default function ElectricianMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ElectricianClass extends HomeAndConstructionBusinessMixin(Resource) implements Electrician {
  }
  return ElectricianClass
}

class ElectricianImpl extends ElectricianMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Electrician>) {
    super(arg)
    this.types.add(schema.Electrician)
    initializeProperties(this, init)
  }
}
ElectricianMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Electrician)
ElectricianMixin.Class = ElectricianImpl
