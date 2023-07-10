import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OrganizationMixin } from './Organization.js';

export interface OnlineBusiness<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, rdfine.RdfResource<D> {
}

export function OnlineBusinessMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<OnlineBusiness & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class OnlineBusinessClass extends OrganizationMixin(Resource) {
  }
  return OnlineBusinessClass as any
}

class OnlineBusinessImpl extends OnlineBusinessMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OnlineBusiness>) {
    super(arg, init)
    this.types.add(schema.OnlineBusiness)
  }

  static readonly __mixins: Mixin[] = [OnlineBusinessMixin, OrganizationMixin];
}
OnlineBusinessMixin.appliesTo = schema.OnlineBusiness
OnlineBusinessMixin.Class = OnlineBusinessImpl

export const fromPointer = createFactory<OnlineBusiness>([OrganizationMixin, OnlineBusinessMixin], { types: [schema.OnlineBusiness] });
