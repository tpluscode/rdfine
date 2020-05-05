import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface EmploymentAgency extends Schema.LocalBusiness, RdfResource {
}

export function EmploymentAgencyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class EmploymentAgencyClass extends LocalBusinessMixin(Resource) implements EmploymentAgency {
  }
  return EmploymentAgencyClass
}

class EmploymentAgencyImpl extends EmploymentAgencyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<EmploymentAgency>) {
    super(arg, init)
    this.types.add(schema.EmploymentAgency)
  }

  static readonly __mixins: Mixin[] = [EmploymentAgencyMixin, LocalBusinessMixin];
}
EmploymentAgencyMixin.appliesTo = schema.EmploymentAgency
EmploymentAgencyMixin.Class = EmploymentAgencyImpl
