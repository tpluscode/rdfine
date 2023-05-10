import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalEntityMixin } from './MedicalEntity.js';

export interface MedicalProcedure<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, rdfine.RdfResource<D> {
  bodyLocation: string | undefined;
  followup: string | undefined;
  howPerformed: string | undefined;
  preparation: Schema.MedicalEntity<D> | undefined;
  preparationLiteral: string | undefined;
  procedureType: Schema.MedicalProcedureType | undefined;
  status: string | undefined;
  statusTerm: Schema.EventStatusType | Schema.MedicalStudyStatus | undefined;
}

export function MedicalProcedureMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<MedicalProcedure> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MedicalProcedureClass extends MedicalEntityMixin(Resource) implements Partial<MedicalProcedure> {
    @rdfine.property.literal()
    bodyLocation: string | undefined;
    @rdfine.property.literal()
    followup: string | undefined;
    @rdfine.property.literal()
    howPerformed: string | undefined;
    @rdfine.property.resource()
    preparation: Schema.MedicalEntity | undefined;
    @rdfine.property.literal({ path: schema.preparation })
    preparationLiteral: string | undefined;
    @rdfine.property()
    procedureType: Schema.MedicalProcedureType | undefined;
    @rdfine.property.literal()
    status: string | undefined;
    @rdfine.property({ path: schema.status })
    statusTerm: Schema.EventStatusType | Schema.MedicalStudyStatus | undefined;
  }
  return MedicalProcedureClass
}

class MedicalProcedureImpl extends MedicalProcedureMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalProcedure>) {
    super(arg, init)
    this.types.add(schema.MedicalProcedure)
  }

  static readonly __mixins: Mixin[] = [MedicalProcedureMixin, MedicalEntityMixin];
}
MedicalProcedureMixin.appliesTo = schema.MedicalProcedure
MedicalProcedureMixin.Class = MedicalProcedureImpl

export const fromPointer = createFactory<MedicalProcedure>([MedicalEntityMixin, MedicalProcedureMixin], { types: [schema.MedicalProcedure] });
