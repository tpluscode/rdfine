import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalEntityMixin } from './MedicalEntity.js';

export interface MedicalRiskFactor<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalEntity<D>, RdfResource<D> {
  increasesRiskOf: Schema.MedicalEntity<D> | undefined;
}

export function MedicalRiskFactorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<MedicalRiskFactor> & RdfResourceCore> & Base {
  @namespace(schema)
  class MedicalRiskFactorClass extends MedicalEntityMixin(Resource) implements Partial<MedicalRiskFactor> {
    @property.resource()
    increasesRiskOf: Schema.MedicalEntity | undefined;
  }
  return MedicalRiskFactorClass
}

class MedicalRiskFactorImpl extends MedicalRiskFactorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<MedicalRiskFactor>) {
    super(arg, init)
    this.types.add(schema.MedicalRiskFactor)
  }

  static readonly __mixins: Mixin[] = [MedicalRiskFactorMixin, MedicalEntityMixin];
}
MedicalRiskFactorMixin.appliesTo = schema.MedicalRiskFactor
MedicalRiskFactorMixin.Class = MedicalRiskFactorImpl

export const fromPointer = createFactory<MedicalRiskFactor>([MedicalEntityMixin, MedicalRiskFactorMixin], { types: [schema.MedicalRiskFactor] });
