import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LegalServiceMixin from './LegalService';

export interface Attorney extends Schema.LegalService, RdfResource {
}

export default function AttorneyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AttorneyClass extends LegalServiceMixin(Resource) implements Attorney {
  }
  return AttorneyClass
}

class AttorneyImpl extends AttorneyMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.Attorney)
  }
}
AttorneyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Attorney)
AttorneyMixin.Class = AttorneyImpl
