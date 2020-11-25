import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface AnatomicalStructure<ID extends ResourceNode = ResourceNode> extends Schema.MedicalEntity<ID>, RdfResource<ID> {
  associatedPathophysiology: string | undefined;
  bodyLocation: string | undefined;
  connectedTo: Schema.AnatomicalStructure<SiblingNode<ID>> | undefined;
  diagram: Schema.ImageObject<SiblingNode<ID>> | undefined;
  partOfSystem: Schema.AnatomicalSystem<SiblingNode<ID>> | undefined;
  relatedCondition: Schema.MedicalCondition<SiblingNode<ID>> | undefined;
  relatedTherapy: Schema.MedicalTherapy<SiblingNode<ID>> | undefined;
  subStructure: Schema.AnatomicalStructure<SiblingNode<ID>> | undefined;
}

export function AnatomicalStructureMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class AnatomicalStructureClass extends MedicalEntityMixin(Resource) implements AnatomicalStructure {
    @property.literal()
    associatedPathophysiology: string | undefined;
    @property.literal()
    bodyLocation: string | undefined;
    @property.resource()
    connectedTo: Schema.AnatomicalStructure | undefined;
    @property.resource()
    diagram: Schema.ImageObject | undefined;
    @property.resource()
    partOfSystem: Schema.AnatomicalSystem | undefined;
    @property.resource()
    relatedCondition: Schema.MedicalCondition | undefined;
    @property.resource()
    relatedTherapy: Schema.MedicalTherapy | undefined;
    @property.resource()
    subStructure: Schema.AnatomicalStructure | undefined;
  }
  return AnatomicalStructureClass
}

class AnatomicalStructureImpl extends AnatomicalStructureMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<AnatomicalStructure>) {
    super(arg, init)
    this.types.add(schema.AnatomicalStructure)
  }

  static readonly __mixins: Mixin[] = [AnatomicalStructureMixin, MedicalEntityMixin];
}
AnatomicalStructureMixin.appliesTo = schema.AnatomicalStructure
AnatomicalStructureMixin.Class = AnatomicalStructureImpl
