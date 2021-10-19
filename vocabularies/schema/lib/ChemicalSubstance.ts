import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { BioChemEntityMixin } from './BioChemEntity';

export interface ChemicalSubstance<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BioChemEntity<D>, RdfResource<D> {
  chemicalComposition: string | undefined;
  chemicalRole: RDF.Term | undefined;
  potentialUse: RDF.Term | undefined;
}

export function ChemicalSubstanceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ChemicalSubstance> & RdfResourceCore> & Base {
  @namespace(schema)
  class ChemicalSubstanceClass extends BioChemEntityMixin(Resource) implements Partial<ChemicalSubstance> {
    @property.literal()
    chemicalComposition: string | undefined;
    @property()
    chemicalRole: RDF.Term | undefined;
    @property()
    potentialUse: RDF.Term | undefined;
  }
  return ChemicalSubstanceClass
}

class ChemicalSubstanceImpl extends ChemicalSubstanceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ChemicalSubstance>) {
    super(arg, init)
    this.types.add(schema.ChemicalSubstance)
  }

  static readonly __mixins: Mixin[] = [ChemicalSubstanceMixin, BioChemEntityMixin];
}
ChemicalSubstanceMixin.appliesTo = schema.ChemicalSubstance
ChemicalSubstanceMixin.Class = ChemicalSubstanceImpl

export const fromPointer = createFactory<ChemicalSubstance>([BioChemEntityMixin, ChemicalSubstanceMixin], { types: [schema.ChemicalSubstance] });
