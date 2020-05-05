import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { PermitMixin } from './Permit';

export interface GovernmentPermit extends Schema.Permit, RdfResource {
}

export function GovernmentPermitMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GovernmentPermitClass extends PermitMixin(Resource) implements GovernmentPermit {
  }
  return GovernmentPermitClass
}

class GovernmentPermitImpl extends GovernmentPermitMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GovernmentPermit>) {
    super(arg, init)
    this.types.add(schema.GovernmentPermit)
  }

  static readonly __mixins: Mixin[] = [GovernmentPermitMixin, PermitMixin];
}
GovernmentPermitMixin.appliesTo = schema.GovernmentPermit
GovernmentPermitMixin.Class = GovernmentPermitImpl
