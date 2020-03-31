import { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import RdfResourceImpl from '@tpluscode/rdfine/RdfResource';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Residence>) {
    super(arg, init)
    this.types.add(schema.Residence)
  }
}
ResidenceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Residence)
ResidenceMixin.Class = ResidenceImpl
