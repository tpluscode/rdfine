import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ThingMixin } from './Thing.js';

export interface BioChemEntity<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Thing<D>, RdfResource<D> {
  associatedDisease: Schema.MedicalCondition<D> | Schema.PropertyValue<D> | undefined;
  bioChemInteraction: Schema.BioChemEntity<D> | undefined;
  bioChemSimilarity: Schema.BioChemEntity<D> | undefined;
  biologicalRole: RDF.Term | undefined;
  hasBioChemEntityPart: Schema.BioChemEntity<D> | undefined;
  hasMolecularFunction: Schema.PropertyValue<D> | undefined;
  hasRepresentation: Schema.PropertyValue<D> | undefined;
  hasRepresentationLiteral: string | undefined;
  isEncodedByBioChemEntity: Schema.Gene<D> | undefined;
  isInvolvedInBiologicalProcess: Schema.PropertyValue<D> | undefined;
  isLocatedInSubcellularLocation: Schema.PropertyValue<D> | undefined;
  isPartOfBioChemEntity: Schema.BioChemEntity<D> | undefined;
  taxonomicRange: Schema.Taxon<D> | undefined;
  taxonomicRangeLiteral: string | undefined;
}

export function BioChemEntityMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<BioChemEntity> & RdfResourceCore> & Base {
  @namespace(schema)
  class BioChemEntityClass extends ThingMixin(Resource) implements Partial<BioChemEntity> {
    @property.resource()
    associatedDisease: Schema.MedicalCondition | Schema.PropertyValue | undefined;
    @property.resource()
    bioChemInteraction: Schema.BioChemEntity | undefined;
    @property.resource()
    bioChemSimilarity: Schema.BioChemEntity | undefined;
    @property()
    biologicalRole: RDF.Term | undefined;
    @property.resource()
    hasBioChemEntityPart: Schema.BioChemEntity | undefined;
    @property.resource()
    hasMolecularFunction: Schema.PropertyValue | undefined;
    @property.resource()
    hasRepresentation: Schema.PropertyValue | undefined;
    @property.literal({ path: schema.hasRepresentation })
    hasRepresentationLiteral: string | undefined;
    @property.resource()
    isEncodedByBioChemEntity: Schema.Gene | undefined;
    @property.resource()
    isInvolvedInBiologicalProcess: Schema.PropertyValue | undefined;
    @property.resource()
    isLocatedInSubcellularLocation: Schema.PropertyValue | undefined;
    @property.resource()
    isPartOfBioChemEntity: Schema.BioChemEntity | undefined;
    @property.resource()
    taxonomicRange: Schema.Taxon | undefined;
    @property.literal({ path: schema.taxonomicRange })
    taxonomicRangeLiteral: string | undefined;
  }
  return BioChemEntityClass
}

class BioChemEntityImpl extends BioChemEntityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<BioChemEntity>) {
    super(arg, init)
    this.types.add(schema.BioChemEntity)
  }

  static readonly __mixins: Mixin[] = [BioChemEntityMixin, ThingMixin];
}
BioChemEntityMixin.appliesTo = schema.BioChemEntity
BioChemEntityMixin.Class = BioChemEntityImpl

export const fromPointer = createFactory<BioChemEntity>([ThingMixin, BioChemEntityMixin], { types: [schema.BioChemEntity] });
