import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { OrganizationMixin } from './Organization';

export interface SportsOrganization<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, RdfResource<D> {
  sport: string | undefined;
  sportTerm: RDF.NamedNode | undefined;
}

export function SportsOrganizationMixin<Base extends Constructor>(Resource: Base): Constructor<SportsOrganization> & Base {
  @namespace(schema)
  class SportsOrganizationClass extends OrganizationMixin(Resource) implements Partial<SportsOrganization> {
    @property.literal()
    sport: string | undefined;
    @property({ path: schema.sport })
    sportTerm: RDF.NamedNode | undefined;
  }
  return SportsOrganizationClass
}

class SportsOrganizationImpl extends SportsOrganizationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SportsOrganization>) {
    super(arg, init)
    this.types.add(schema.SportsOrganization)
  }

  static readonly __mixins: Mixin[] = [SportsOrganizationMixin, OrganizationMixin];
}
SportsOrganizationMixin.appliesTo = schema.SportsOrganization
SportsOrganizationMixin.Class = SportsOrganizationImpl
