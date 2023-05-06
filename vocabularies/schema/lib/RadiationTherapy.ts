import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalTherapyMixin } from './MedicalTherapy.js';

export interface RadiationTherapy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalTherapy<D>, RdfResource<D> {
}

export function RadiationTherapyMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<RadiationTherapy> & RdfResourceCore> & Base {
  @namespace(schema)
  class RadiationTherapyClass extends MedicalTherapyMixin(Resource) implements Partial<RadiationTherapy> {
  }
  return RadiationTherapyClass
}

class RadiationTherapyImpl extends RadiationTherapyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<RadiationTherapy>) {
    super(arg, init)
    this.types.add(schema.RadiationTherapy)
  }

  static readonly __mixins: Mixin[] = [RadiationTherapyMixin, MedicalTherapyMixin];
}
RadiationTherapyMixin.appliesTo = schema.RadiationTherapy
RadiationTherapyMixin.Class = RadiationTherapyImpl

export const fromPointer = createFactory<RadiationTherapy>([MedicalTherapyMixin, RadiationTherapyMixin], { types: [schema.RadiationTherapy] });
