import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { TherapeuticProcedureMixin } from './TherapeuticProcedure';

export interface MedicalTherapy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TherapeuticProcedure<D>, RdfResource<D> {
  contraindication: Schema.MedicalContraindication<D> | undefined;
  contraindicationLiteral: string | undefined;
  duplicateTherapy: Schema.MedicalTherapy<D> | undefined;
  seriousAdverseOutcome: Schema.MedicalEntity<D> | undefined;
}

export function MedicalTherapyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalTherapy> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalTherapyClass extends TherapeuticProcedureMixin(Resource) implements Partial<MedicalTherapy> {
    @property.resource()
    contraindication: Schema.MedicalContraindication | undefined;
    @property.literal({ path: schema.contraindication })
    contraindicationLiteral: string | undefined;
    @property.resource()
    duplicateTherapy: Schema.MedicalTherapy | undefined;
    @property.resource()
    seriousAdverseOutcome: Schema.MedicalEntity | undefined;
  }
  return MedicalTherapyClass
}

class MedicalTherapyImpl extends MedicalTherapyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalTherapy>) {
    super(arg, init)
    this.types.add(schema.MedicalTherapy)
  }

  static readonly __mixins: Mixin[] = [MedicalTherapyMixin, TherapeuticProcedureMixin];
}
MedicalTherapyMixin.appliesTo = schema.MedicalTherapy
MedicalTherapyMixin.Class = MedicalTherapyImpl

export const fromPointer = createFactory<MedicalTherapy>([TherapeuticProcedureMixin, MedicalTherapyMixin], { types: [schema.MedicalTherapy] });
