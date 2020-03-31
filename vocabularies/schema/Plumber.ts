import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Plumber>) {
    super(arg, init)
    this.types.add(schema.Plumber)
  }
}
PlumberMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Plumber)
PlumberMixin.Class = PlumberImpl
