import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { OrganizationMixin } from './Organization';

export interface GovernmentOrganization<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, RdfResource<D> {
}

export function GovernmentOrganizationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class GovernmentOrganizationClass extends OrganizationMixin(Resource) implements GovernmentOrganization {
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
