import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalEntityMixin } from './MedicalEntity.js';

export interface AnatomicalStructure<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, rdfine.RdfResource<D> {
  associatedPathophysiology: string | undefined;
  bodyLocation: string | undefined;
  connectedTo: Schema.AnatomicalStructure<D> | undefined;
  diagram: Schema.ImageObject<D> | undefined;
  partOfSystem: Schema.AnatomicalSystem<D> | undefined;
  relatedCondition: Schema.MedicalCondition<D> | undefined;
  relatedTherapy: Schema.MedicalTherapy<D> | undefined;
  subStructure: Schema.AnatomicalStructure<D> | undefined;
}

export function AnatomicalStructureMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<AnatomicalStructure & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class AnatomicalStructureClass extends MedicalEntityMixin(Resource) {
    @rdfine.property.literal()
    associatedPathophysiology: string | undefined;
    @rdfine.property.literal()
    bodyLocation: string | undefined;
    @rdfine.property.resource()
    connectedTo: Schema.AnatomicalStructure | undefined;
    @rdfine.property.resource()
    diagram: Schema.ImageObject | undefined;
    @rdfine.property.resource()
    partOfSystem: Schema.AnatomicalSystem | undefined;
    @rdfine.property.resource()
    relatedCondition: Schema.MedicalCondition | undefined;
    @rdfine.property.resource()
    relatedTherapy: Schema.MedicalTherapy | undefined;
    @rdfine.property.resource()
    subStructure: Schema.AnatomicalStructure | undefined;
  }
  return AnatomicalStructureClass as any
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

export const fromPointer = createFactory<AnatomicalStructure>([MedicalEntityMixin, AnatomicalStructureMixin], { types: [schema.AnatomicalStructure] });
