import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import PlaceMixin from './Place';

export interface Residence extends Schema.Place, RdfResource {
}

export default function ResidenceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ResidenceClass extends PlaceMixin(Resource) implements Residence {
  }
  return ResidenceClass
}

class ResidenceImpl extends ResidenceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: PropertyInitializer<Residence>) {
    super(arg)
    this.types.add(schema.Residence)
    initializeProperties<Residence>(this, init)
  }
}
ResidenceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Residence)
ResidenceMixin.Class = ResidenceImpl
