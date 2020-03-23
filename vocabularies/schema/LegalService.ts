import { Constructor, namespace, RdfResource, RdfResourceImpl } from '@tpluscode/rdfine';
import * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type * as Schema from '.';
import LocalBusinessMixin from './LocalBusiness';

export interface LegalService extends Schema.LocalBusiness, RdfResource {
}

export default function LegalServiceMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LegalServiceClass extends LocalBusinessMixin(Resource) implements LegalService {
  }
  return LegalServiceClass
}

class LegalServiceImpl extends LegalServiceMixin(RdfResourceImpl) {
  constructor(arg: any) {
    super(arg)
    this.types.add(schema.LegalService)
  }
}
LegalServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LegalService)
LegalServiceMixin.Class = LegalServiceImpl
