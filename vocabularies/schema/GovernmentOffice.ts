import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Schema from '.';
import { LocalBusinessMixin } from './LocalBusiness';

export interface GovernmentOffice extends Schema.LocalBusiness, RdfResource {
}

export function GovernmentOfficeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GovernmentOfficeClass extends LocalBusinessMixin(Resource) implements GovernmentOffice {
  }
  return GovernmentOfficeClass
}

class GovernmentOfficeImpl extends GovernmentOfficeMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GovernmentOffice>) {
    super(arg, init)
    this.types.add(schema.GovernmentOffice)
  }
}
GovernmentOfficeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GovernmentOffice)
GovernmentOfficeMixin.Class = GovernmentOfficeImpl
