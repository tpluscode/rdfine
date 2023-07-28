import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalEntityMixin } from './MedicalEntity.js';

export interface SuperficialAnatomy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, rdfine.RdfResource<D> {
  associatedPathophysiology: string | undefined;
  relatedAnatomy: Schema.AnatomicalStructure<D> | Schema.AnatomicalSystem<D> | undefined;
  relatedCondition: Schema.MedicalCondition<D> | undefined;
  relatedTherapy: Schema.MedicalTherapy<D> | undefined;
  significance: string | undefined;
}

export function SuperficialAnatomyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SuperficialAnatomy & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class SuperficialAnatomyClass extends MedicalEntityMixin(Resource) {
    @rdfine.property.literal()
    associatedPathophysiology: string | undefined;
    @rdfine.property.resource()
    relatedAnatomy: Schema.AnatomicalStructure | Schema.AnatomicalSystem | undefined;
    @rdfine.property.resource()
    relatedCondition: Schema.MedicalCondition | undefined;
    @rdfine.property.resource()
    relatedTherapy: Schema.MedicalTherapy | undefined;
    @rdfine.property.literal()
    significance: string | undefined;
  }
  return SuperficialAnatomyClass as any
}

class SuperficialAnatomyImpl extends SuperficialAnatomyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SuperficialAnatomy>) {
    super(arg, init)
    this.types.add(schema.SuperficialAnatomy)
  }

  static readonly __mixins: Mixin[] = [SuperficialAnatomyMixin, MedicalEntityMixin];
}
SuperficialAnatomyMixin.appliesTo = schema.SuperficialAnatomy
SuperficialAnatomyMixin.Class = SuperficialAnatomyImpl

export const fromPointer = createFactory<SuperficialAnatomy>([MedicalEntityMixin, SuperficialAnatomyMixin], { types: [schema.SuperficialAnatomy] });
