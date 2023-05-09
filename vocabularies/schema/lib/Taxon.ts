import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ThingMixin } from './Thing.js';

export interface Taxon<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Thing<D>, rdfine.RdfResource<D> {
  childTaxon: Schema.Taxon<D> | undefined;
  childTaxonLiteral: string | undefined;
  hasDefinedTerm: RDF.Term | undefined;
  parentTaxon: Schema.Taxon<D> | undefined;
  parentTaxonLiteral: string | undefined;
  taxonRank: Schema.PropertyValue<D> | undefined;
  taxonRankLiteral: string | undefined;
}

export function TaxonMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<Taxon> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class TaxonClass extends ThingMixin(Resource) implements Partial<Taxon> {
    @rdfine.property.resource()
    childTaxon: Schema.Taxon | undefined;
    @rdfine.property.literal({ path: schema.childTaxon })
    childTaxonLiteral: string | undefined;
    @rdfine.property()
    hasDefinedTerm: RDF.Term | undefined;
    @rdfine.property.resource()
    parentTaxon: Schema.Taxon | undefined;
    @rdfine.property.literal({ path: schema.parentTaxon })
    parentTaxonLiteral: string | undefined;
    @rdfine.property.resource()
    taxonRank: Schema.PropertyValue | undefined;
    @rdfine.property.literal({ path: schema.taxonRank })
    taxonRankLiteral: string | undefined;
  }
  return TaxonClass
}

class TaxonImpl extends TaxonMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Taxon>) {
    super(arg, init)
    this.types.add(schema.Taxon)
  }

  static readonly __mixins: Mixin[] = [TaxonMixin, ThingMixin];
}
TaxonMixin.appliesTo = schema.Taxon
TaxonMixin.Class = TaxonImpl

export const fromPointer = createFactory<Taxon>([ThingMixin, TaxonMixin], { types: [schema.Taxon] });
