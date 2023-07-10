import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { TherapeuticProcedureMixin } from './TherapeuticProcedure.js';

export interface MedicalTherapy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.TherapeuticProcedure<D>, rdfine.RdfResource<D> {
  contraindication: Schema.MedicalContraindication<D> | undefined;
  contraindicationLiteral: string | undefined;
  duplicateTherapy: Schema.MedicalTherapy<D> | undefined;
  seriousAdverseOutcome: Schema.MedicalEntity<D> | undefined;
}

export function MedicalTherapyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MedicalTherapy & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MedicalTherapyClass extends TherapeuticProcedureMixin(Resource) {
    @rdfine.property.resource()
    contraindication: Schema.MedicalContraindication | undefined;
    @rdfine.property.literal({ path: schema.contraindication })
    contraindicationLiteral: string | undefined;
    @rdfine.property.resource()
    duplicateTherapy: Schema.MedicalTherapy | undefined;
    @rdfine.property.resource()
    seriousAdverseOutcome: Schema.MedicalEntity | undefined;
  }
  return MedicalTherapyClass as any
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
