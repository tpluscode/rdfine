import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalEntityMixin } from './MedicalEntity';

export interface MedicalContraindication<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, RdfResource<D> {
}

export function MedicalContraindicationMixin<Base extends Constructor>(Resource: Base): Constructor<MedicalContraindication> & Base {
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
