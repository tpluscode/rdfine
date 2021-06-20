import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { AdministrativeAreaMixin } from './AdministrativeArea';

export interface Country<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AdministrativeArea<D>, RdfResource<D> {
}

export function CountryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Country> & RdfResourceCore> & Base {
  @namespace(schema)
  class CountryClass extends AdministrativeAreaMixin(Resource) implements Partial<Country> {
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

export const fromPointer = createFactory<Country>([AdministrativeAreaMixin, CountryMixin], { types: [schema.Country] });
