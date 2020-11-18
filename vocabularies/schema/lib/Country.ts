import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AdministrativeAreaMixin } from './AdministrativeArea';

export interface Country<ID extends ResourceNode = ResourceNode> extends Schema.AdministrativeArea<ID>, RdfResource<ID> {
}

export function CountryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class CountryClass extends AdministrativeAreaMixin(Resource) implements Country {
  }
  return CountryClass
}

class CountryImpl extends CountryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Country>) {
    super(arg, init)
    this.types.add(schema.Country)
  }

  static readonly __mixins: Mixin[] = [CountryMixin, AdministrativeAreaMixin];
}
CountryMixin.appliesTo = schema.Country
CountryMixin.Class = CountryImpl
