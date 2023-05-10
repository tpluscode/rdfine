import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OrganizationMixin } from './Organization.js';

export interface SearchRescueOrganization<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, rdfine.RdfResource<D> {
}

export function SearchRescueOrganizationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SearchRescueOrganization> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SearchRescueOrganizationClass extends OrganizationMixin(Resource) implements Partial<SearchRescueOrganization> {
  }
  return SearchRescueOrganizationClass
}

class SearchRescueOrganizationImpl extends SearchRescueOrganizationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SearchRescueOrganization>) {
    super(arg, init)
    this.types.add(schema.SearchRescueOrganization)
  }

  static readonly __mixins: Mixin[] = [SearchRescueOrganizationMixin, OrganizationMixin];
}
SearchRescueOrganizationMixin.appliesTo = schema.SearchRescueOrganization
SearchRescueOrganizationMixin.Class = SearchRescueOrganizationImpl

export const fromPointer = createFactory<SearchRescueOrganization>([OrganizationMixin, SearchRescueOrganizationMixin], { types: [schema.SearchRescueOrganization] });
