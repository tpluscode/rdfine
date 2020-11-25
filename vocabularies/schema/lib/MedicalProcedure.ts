import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface MedicalProcedure<ID extends ResourceNode = ResourceNode> extends Schema.MedicalEntity<ID>, RdfResource<ID> {
  bodyLocation: string | undefined;
  followup: string | undefined;
  howPerformed: string | undefined;
  preparation: Schema.MedicalEntity<SiblingNode<ID>> | undefined;
  preparationLiteral: string | undefined;
  procedureType: Schema.MedicalProcedureType | undefined;
  status: string | undefined;
  statusTerm: Schema.EventStatusType | Schema.MedicalStudyStatus | undefined;
}

export function MedicalProcedureMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalProcedureClass extends MedicalEntityMixin(Resource) implements MedicalProcedure {
    @property.literal()
    bodyLocation: string | undefined;
    @property.literal()
    followup: string | undefined;
    @property.literal()
    howPerformed: string | undefined;
    @property.resource()
    preparation: Schema.MedicalEntity | undefined;
    @property.literal({ path: schema.preparation })
    preparationLiteral: string | undefined;
    @property()
    procedureType: Schema.MedicalProcedureType | undefined;
    @property.literal()
    status: string | undefined;
    @property({ path: schema.status })
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
