import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface SuperficialAnatomy<ID extends ResourceNode = ResourceNode> extends Schema.MedicalEntity<ID>, RdfResource<ID> {
  associatedPathophysiology: string | undefined;
  relatedAnatomy: Schema.AnatomicalStructure<SiblingNode<ID>> | Schema.AnatomicalSystem<SiblingNode<ID>> | undefined;
  relatedCondition: Schema.MedicalCondition<SiblingNode<ID>> | undefined;
  relatedTherapy: Schema.MedicalTherapy<SiblingNode<ID>> | undefined;
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
