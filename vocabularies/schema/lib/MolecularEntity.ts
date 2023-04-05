import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { BioChemEntityMixin } from './BioChemEntity.js';

export interface MolecularEntity<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.BioChemEntity<D>, RdfResource<D> {
  chemicalRole: RDF.Term | undefined;
  inChI: string | undefined;
  inChIKey: string | undefined;
  iupacName: string | undefined;
  molecularFormula: string | undefined;
  molecularWeight: Schema.QuantitativeValue<D> | undefined;
  molecularWeightLiteral: string | undefined;
  monoisotopicMolecularWeight: Schema.QuantitativeValue<D> | undefined;
  monoisotopicMolecularWeightLiteral: string | undefined;
  potentialUse: RDF.Term | undefined;
  smiles: string | undefined;
}

export function MolecularEntityMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MolecularEntity> & RdfResourceCore> & Base {
  @namespace(schema)
  class MolecularEntityClass extends BioChemEntityMixin(Resource) implements Partial<MolecularEntity> {
    @property()
    chemicalRole: RDF.Term | undefined;
    @property.literal()
    inChI: string | undefined;
    @property.literal()
    inChIKey: string | undefined;
    @property.literal()
    iupacName: string | undefined;
    @property.literal()
    molecularFormula: string | undefined;
    @property.resource()
    molecularWeight: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.molecularWeight })
    molecularWeightLiteral: string | undefined;
    @property.resource()
    monoisotopicMolecularWeight: Schema.QuantitativeValue | undefined;
    @property.literal({ path: schema.monoisotopicMolecularWeight })
    monoisotopicMolecularWeightLiteral: string | undefined;
    @property()
    potentialUse: RDF.Term | undefined;
    @property.literal()
    smiles: string | undefined;
  }
  return MolecularEntityClass
}

class MolecularEntityImpl extends MolecularEntityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MolecularEntity>) {
    super(arg, init)
    this.types.add(schema.MolecularEntity)
  }

  static readonly __mixins: Mixin[] = [MolecularEntityMixin, BioChemEntityMixin];
}
MolecularEntityMixin.appliesTo = schema.MolecularEntity
MolecularEntityMixin.Class = MolecularEntityImpl

export const fromPointer = createFactory<MolecularEntity>([BioChemEntityMixin, MolecularEntityMixin], { types: [schema.MolecularEntity] });
