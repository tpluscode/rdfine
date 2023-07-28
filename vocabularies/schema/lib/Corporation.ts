import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { OrganizationMixin } from './Organization.js';

export interface Corporation<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, rdfine.RdfResource<D> {
  tickerSymbol: string | undefined;
}

export function CorporationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Corporation & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class CorporationClass extends OrganizationMixin(Resource) {
    @rdfine.property.literal()
    tickerSymbol: string | undefined;
  }
  return CorporationClass as any
}

class CorporationImpl extends CorporationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Corporation>) {
    super(arg, init)
    this.types.add(schema.Corporation)
  }

  static readonly __mixins: Mixin[] = [CorporationMixin, OrganizationMixin];
}
CorporationMixin.appliesTo = schema.Corporation
CorporationMixin.Class = CorporationImpl

export const fromPointer = createFactory<Corporation>([OrganizationMixin, CorporationMixin], { types: [schema.Corporation] });
