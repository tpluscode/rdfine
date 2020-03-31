import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import PlaceMixin from './Place';

export interface Landform extends Schema.Place, RdfResource {
}

export default function LandformMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LandformClass extends PlaceMixin(Resource) implements Landform {
  }
  return LandformClass
}

class LandformImpl extends LandformMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Landform>) {
    super(arg, init)
    this.types.add(schema.Landform)
  }
}
LandformMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Landform)
LandformMixin.Class = LandformImpl
