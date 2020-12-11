import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface AnatomicalSystem<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, RdfResource<D> {
  associatedPathophysiology: string | undefined;
  comprisedOf: Schema.AnatomicalStructure<D> | Schema.AnatomicalSystem<D> | undefined;
  relatedCondition: Schema.MedicalCondition<D> | undefined;
  relatedStructure: Schema.AnatomicalStructure<D> | undefined;
  relatedTherapy: Schema.MedicalTherapy<D> | undefined;
}

export function AnatomicalSystemMixin<Base extends Constructor>(Resource: Base): Constructor<AnatomicalSystem> & Base {
  @namespace(schema)
  class AnatomicalSystemClass extends MedicalEntityMixin(Resource) implements Partial<AnatomicalSystem> {
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
