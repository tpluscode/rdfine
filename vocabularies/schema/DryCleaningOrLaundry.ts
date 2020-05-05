import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface DryCleaningOrLaundry extends Schema.LocalBusiness, RdfResource {
}

export function DryCleaningOrLaundryMixin<Base extends Constructor>(Resource: Base) {
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

  static readonly __mixins: Mixin[] = [DryCleaningOrLaundryMixin, LocalBusinessMixin];
}
DryCleaningOrLaundryMixin.appliesTo = schema.DryCleaningOrLaundry
DryCleaningOrLaundryMixin.Class = DryCleaningOrLaundryImpl
