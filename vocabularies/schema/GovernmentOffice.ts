import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface GovernmentOffice extends Schema.LocalBusiness, RdfResource {
}

export default function GovernmentOfficeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GovernmentOfficeClass extends LocalBusinessMixin(Resource) implements GovernmentOffice {
  }
  return GovernmentOfficeClass
}

class GovernmentOfficeImpl extends GovernmentOfficeMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.GovernmentOffice)
  }
}
GovernmentOfficeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.GovernmentOffice)
GovernmentOfficeMixin.Class = GovernmentOfficeImpl
