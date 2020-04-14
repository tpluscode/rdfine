import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
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
  constructor(arg: ResourceNode, init?: Initializer<Attorney>) {
    super(arg, init)
    this.types.add(schema.Attorney)
  }
}
AttorneyMixin.shouldApply = (r: RdfResource) => r.types.has(schema.Attorney)
AttorneyMixin.Class = AttorneyImpl
