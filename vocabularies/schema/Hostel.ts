import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { LodgingBusinessMixin } from './LodgingBusiness';

export interface Hostel extends Schema.LodgingBusiness, RdfResource {
}

export function HostelMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class HostelClass extends LodgingBusinessMixin(Resource) implements Hostel {
  }
  return HostelClass
}

class HostelImpl extends HostelMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Hostel>) {
    super(arg, init)
    this.types.add(schema.Hostel)
  }
}
HostelMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Hostel)
HostelMixin.Class = HostelImpl
