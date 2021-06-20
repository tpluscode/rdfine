import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalIndicationMixin } from './MedicalIndication';

export interface ApprovedIndication<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalIndication<D>, RdfResource<D> {
}

export function ApprovedIndicationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ApprovedIndication> & RdfResourceCore> & Base {
  @namespace(schema)
  class ApprovedIndicationClass extends MedicalIndicationMixin(Resource) implements Partial<ApprovedIndication> {
  }
  return ApprovedIndicationClass
}

class ApprovedIndicationImpl extends ApprovedIndicationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ApprovedIndication>) {
    super(arg, init)
    this.types.add(schema.ApprovedIndication)
  }

  static readonly __mixins: Mixin[] = [ApprovedIndicationMixin, MedicalIndicationMixin];
}
ApprovedIndicationMixin.appliesTo = schema.ApprovedIndication
ApprovedIndicationMixin.Class = ApprovedIndicationImpl

export const fromPointer = createFactory<ApprovedIndication>([MedicalIndicationMixin, ApprovedIndicationMixin], { types: [schema.ApprovedIndication] });
