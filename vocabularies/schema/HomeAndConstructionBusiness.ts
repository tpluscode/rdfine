import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface HomeAndConstructionBusiness extends Schema.LocalBusiness, RdfResource {
}

export default function HomeAndConstructionBusinessMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HomeAndConstructionBusinessClass extends LocalBusinessMixin(Resource) implements HomeAndConstructionBusiness {
  }
  return HomeAndConstructionBusinessClass
}

class HomeAndConstructionBusinessImpl extends HomeAndConstructionBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<HomeAndConstructionBusiness>) {
    super(arg)
    this.types.add(schema.HomeAndConstructionBusiness)
    initializeProperties(this, init)
  }
}
HomeAndConstructionBusinessMixin.shouldApply = (r: RdfResource) => r.types.has(schema.HomeAndConstructionBusiness)
HomeAndConstructionBusinessMixin.Class = HomeAndConstructionBusinessImpl
