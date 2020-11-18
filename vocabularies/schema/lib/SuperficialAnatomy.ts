import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface SuperficialAnatomy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, RdfResource<D> {
  associatedPathophysiology: string | undefined;
  relatedAnatomy: Schema.AnatomicalStructure<D> | Schema.AnatomicalSystem<D> | undefined;
  relatedCondition: Schema.MedicalCondition<D> | undefined;
  relatedTherapy: Schema.MedicalTherapy<D> | undefined;
  significance: string | undefined;
}

export function SuperficialAnatomyMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class SuperficialAnatomyClass extends MedicalEntityMixin(Resource) implements SuperficialAnatomy {
    @property.literal()
    associatedPathophysiology: string | undefined;
    @property.resource()
    relatedAnatomy: Schema.AnatomicalStructure | Schema.AnatomicalSystem | undefined;
    @property.resource()
    relatedCondition: Schema.MedicalCondition | undefined;
    @property.resource()
    relatedTherapy: Schema.MedicalTherapy | undefined;
    @property.literal()
    significance: string | undefined;
  }
  return SuperficialAnatomyClass
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
