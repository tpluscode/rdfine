import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { ThingMixin } from './Thing';

export interface Taxon<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Thing<D>, RdfResource<D> {
  childTaxon: Schema.Taxon<D> | undefined;
  childTaxonLiteral: string | undefined;
  hasDefinedTerm: RDF.Term | undefined;
  parentTaxon: Schema.Taxon<D> | undefined;
  parentTaxonLiteral: string | undefined;
  taxonRank: Schema.PropertyValue<D> | undefined;
  taxonRankLiteral: string | undefined;
}

export function TaxonMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Taxon> & RdfResourceCore> & Base {
  @namespace(schema)
  class TaxonClass extends ThingMixin(Resource) implements Partial<Taxon> {
    @property.resource()
    childTaxon: Schema.Taxon | undefined;
    @property.literal({ path: schema.childTaxon })
    childTaxonLiteral: string | undefined;
    @property()
    hasDefinedTerm: RDF.Term | undefined;
    @property.resource()
    parentTaxon: Schema.Taxon | undefined;
    @property.literal({ path: schema.parentTaxon })
    parentTaxonLiteral: string | undefined;
    @property.resource()
    taxonRank: Schema.PropertyValue | undefined;
    @property.literal({ path: schema.taxonRank })
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
