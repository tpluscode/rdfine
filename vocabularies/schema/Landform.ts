import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
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
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Landform)
  }
}
LandformMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Landform)
LandformMixin.Class = LandformImpl
