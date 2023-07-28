import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalTherapyMixin } from './MedicalTherapy.js';

export interface OccupationalTherapy<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalTherapy<D>, rdfine.RdfResource<D> {
}

export function OccupationalTherapyMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<OccupationalTherapy & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class OccupationalTherapyClass extends MedicalTherapyMixin(Resource) {
  }
  return OccupationalTherapyClass as any
}

class OccupationalTherapyImpl extends OccupationalTherapyMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<OccupationalTherapy>) {
    super(arg, init)
    this.types.add(schema.OccupationalTherapy)
  }

  static readonly __mixins: Mixin[] = [OccupationalTherapyMixin, MedicalTherapyMixin];
}
OccupationalTherapyMixin.appliesTo = schema.OccupationalTherapy
OccupationalTherapyMixin.Class = OccupationalTherapyImpl

export const fromPointer = createFactory<OccupationalTherapy>([MedicalTherapyMixin, OccupationalTherapyMixin], { types: [schema.OccupationalTherapy] });
