import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import HomeAndConstructionBusinessMixin from './HomeAndConstructionBusiness';

export interface Plumber extends Schema.HomeAndConstructionBusiness, RdfResource {
}

export default function PlumberMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PlumberClass extends HomeAndConstructionBusinessMixin(Resource) implements Plumber {
  }
  return PlumberClass
}

class PlumberImpl extends PlumberMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Plumber>) {
    super(arg)
    this.types.add(schema.Plumber)
    initializeProperties(this, init)
  }
}
PlumberMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Plumber)
PlumberMixin.Class = PlumberImpl
