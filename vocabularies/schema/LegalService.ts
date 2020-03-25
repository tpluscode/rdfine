import { Constructor, namespace, RdfResource, RdfResourceImpl, initializeProperties } from '@tpluscode/rdfine';
import type * as rdf from 'rdf-js';
import { schema } from './lib/namespace';
import type { PropertyInitializer, ResourceNode } from '@tpluscode/rdfine/lib/RdfResource';
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
  constructor(arg: ResourceNode, init?: PropertyInitializer<LegalService>) {
    super(arg)
    this.types.add(schema.LegalService)
    initializeProperties<LegalService>(this, init)
  }
}
LegalServiceMixin.shouldApply = (r: RdfResource) => r.types.has(schema.LegalService)
LegalServiceMixin.Class = LegalServiceImpl
