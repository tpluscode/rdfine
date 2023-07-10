import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { PermitMixin } from './Permit.js';

export interface GovernmentPermit<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Permit<D>, rdfine.RdfResource<D> {
}

export function GovernmentPermitMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<GovernmentPermit & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class GovernmentPermitClass extends PermitMixin(Resource) {
  }
  return GovernmentPermitClass as any
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

export const fromPointer = createFactory<GovernmentPermit>([PermitMixin, GovernmentPermitMixin], { types: [schema.GovernmentPermit] });
