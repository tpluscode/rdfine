import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import GovernmentOfficeMixin from './GovernmentOffice';

export interface PostOffice extends Schema.GovernmentOffice, RdfResource {
}

export default function PostOfficeMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class PostOfficeClass extends GovernmentOfficeMixin(Resource) implements PostOffice {
  }
  return PostOfficeClass
}

class PostOfficeImpl extends PostOfficeMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.PostOffice)
  }
}
PostOfficeMixin.shouldApply = (r: RdfResource) => r.types.has(schema.PostOffice)
PostOfficeMixin.Class = PostOfficeImpl
