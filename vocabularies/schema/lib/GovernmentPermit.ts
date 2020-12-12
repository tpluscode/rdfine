import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { PermitMixin } from './Permit';

export interface GovernmentPermit<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Permit<D>, RdfResource<D> {
}

export function GovernmentPermitMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<GovernmentPermit> & RdfResourceCore> & Base {
  @namespace(schema)
  class GovernmentPermitClass extends PermitMixin(Resource) implements Partial<GovernmentPermit> {
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

export const fromPointer = createFactory<GovernmentPermit>([PermitMixin, GovernmentPermitMixin], { types: [schema.GovernmentPermit] });
