import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalEntityMixin } from './MedicalEntity.js';

export interface MedicalContraindication<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, rdfine.RdfResource<D> {
}

export function MedicalContraindicationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<MedicalContraindication & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class MedicalContraindicationClass extends MedicalEntityMixin(Resource) {
  }
  return MedicalContraindicationClass as any
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

export const fromPointer = createFactory<MedicalContraindication>([MedicalEntityMixin, MedicalContraindicationMixin], { types: [schema.MedicalContraindication] });
