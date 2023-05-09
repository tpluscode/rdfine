import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OrganizationMixin } from './Organization.js';

export interface GovernmentOrganization<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, rdfine.RdfResource<D> {
}

export function GovernmentOrganizationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<GovernmentOrganization> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class GovernmentOrganizationClass extends OrganizationMixin(Resource) implements Partial<GovernmentOrganization> {
  }
  return GovernmentOrganizationClass
}

class GovernmentOrganizationImpl extends GovernmentOrganizationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GovernmentOrganization>) {
    super(arg, init)
    this.types.add(schema.GovernmentOrganization)
  }

  static readonly __mixins: Mixin[] = [GovernmentOrganizationMixin, OrganizationMixin];
}
GovernmentOrganizationMixin.appliesTo = schema.GovernmentOrganization
GovernmentOrganizationMixin.Class = GovernmentOrganizationImpl

export const fromPointer = createFactory<GovernmentOrganization>([OrganizationMixin, GovernmentOrganizationMixin], { types: [schema.GovernmentOrganization] });
