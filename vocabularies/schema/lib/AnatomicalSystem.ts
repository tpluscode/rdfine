import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface AnatomicalSystem<ID extends ResourceNode = ResourceNode> extends Schema.MedicalEntity<ID>, RdfResource<ID> {
  associatedPathophysiology: string | undefined;
  comprisedOf: Schema.AnatomicalStructure<SiblingNode<ID>> | Schema.AnatomicalSystem<SiblingNode<ID>> | undefined;
  relatedCondition: Schema.MedicalCondition<SiblingNode<ID>> | undefined;
  relatedStructure: Schema.AnatomicalStructure<SiblingNode<ID>> | undefined;
  relatedTherapy: Schema.MedicalTherapy<SiblingNode<ID>> | undefined;
}

export function AnatomicalSystemMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AnatomicalSystemClass extends MedicalEntityMixin(Resource) implements AnatomicalSystem {
    @property.literal()
    associatedPathophysiology: string | undefined;
    @property.resource()
    comprisedOf: Schema.AnatomicalStructure | Schema.AnatomicalSystem | undefined;
    @property.resource()
    relatedCondition: Schema.MedicalCondition | undefined;
    @property.resource()
    relatedStructure: Schema.AnatomicalStructure | undefined;
    @property.resource()
    relatedTherapy: Schema.MedicalTherapy | undefined;
  }
  return AnatomicalSystemClass
}

class AnatomicalSystemImpl extends AnatomicalSystemMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AnatomicalSystem>) {
    super(arg, init)
    this.types.add(schema.AnatomicalSystem)
  }

  static readonly __mixins: Mixin[] = [AnatomicalSystemMixin, MedicalEntityMixin];
}
AnatomicalSystemMixin.appliesTo = schema.AnatomicalSystem
AnatomicalSystemMixin.Class = AnatomicalSystemImpl
