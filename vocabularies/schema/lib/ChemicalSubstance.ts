import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { BioChemEntityMixin } from './BioChemEntity.js';

export interface ChemicalSubstance<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BioChemEntity<D>, rdfine.RdfResource<D> {
  chemicalComposition: string | undefined;
  chemicalRole: RDF.Term | undefined;
  potentialUse: RDF.Term | undefined;
}

export function ChemicalSubstanceMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<ChemicalSubstance> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ChemicalSubstanceClass extends BioChemEntityMixin(Resource) implements Partial<ChemicalSubstance> {
    @rdfine.property.literal()
    chemicalComposition: string | undefined;
    @rdfine.property()
    chemicalRole: RDF.Term | undefined;
    @rdfine.property()
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
