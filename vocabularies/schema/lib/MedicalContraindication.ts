import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface MedicalContraindication<ID extends ResourceNode = ResourceNode> extends Schema.MedicalEntity<ID>, RdfResource<ID> {
}

export function MedicalContraindicationMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class MedicalContraindicationClass extends MedicalEntityMixin(Resource) implements MedicalContraindication {
  }
  return MedicalContraindicationClass
}

class MedicalContraindicationImpl extends MedicalContraindicationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalContraindication>) {
    super(arg, init)
    this.types.add(schema.MedicalContraindication)
  }

  static readonly __mixins: Mixin[] = [MedicalContraindicationMixin, MedicalEntityMixin];
}
MedicalContraindicationMixin.appliesTo = schema.MedicalContraindication
MedicalContraindicationMixin.Class = MedicalContraindicationImpl
