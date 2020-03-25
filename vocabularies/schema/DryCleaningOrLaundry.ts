import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface DryCleaningOrLaundry extends Schema.LocalBusiness, RdfResource {
}

export default function DryCleaningOrLaundryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DryCleaningOrLaundryClass extends LocalBusinessMixin(Resource) implements DryCleaningOrLaundry {
  }
  return DryCleaningOrLaundryClass
}

class DryCleaningOrLaundryImpl extends DryCleaningOrLaundryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DryCleaningOrLaundry>) {
    super(arg, init)
    this.types.add(schema.DryCleaningOrLaundry)
  }
}
DryCleaningOrLaundryMixin.shouldApply = (r: RdfResource) => r.types.has(schema.DryCleaningOrLaundry)
DryCleaningOrLaundryMixin.Class = DryCleaningOrLaundryImpl
