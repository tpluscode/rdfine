import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { AdministrativeAreaMixin } from './AdministrativeArea.js';

export interface Country<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.AdministrativeArea<D>, rdfine.RdfResource<D> {
}

export function CountryMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Country & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CountryClass extends AdministrativeAreaMixin(Resource) {
  }
  return CountryClass as any
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
