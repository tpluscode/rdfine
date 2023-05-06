import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalIntangibleMixin } from './MedicalIntangible.js';

export interface DrugLegalStatus<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalIntangible<D>, RdfResource<D> {
  applicableLocation: Schema.AdministrativeArea<D> | undefined;
}

export function DrugLegalStatusMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<DrugLegalStatus> & RdfResourceCore> & Base {
  @namespace(schema)
  class DrugLegalStatusClass extends MedicalIntangibleMixin(Resource) implements Partial<DrugLegalStatus> {
    @property.resource()
    applicableLocation: Schema.AdministrativeArea | undefined;
  }
  return DrugLegalStatusClass
}

class DrugLegalStatusImpl extends DrugLegalStatusMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DrugLegalStatus>) {
    super(arg, init)
    this.types.add(schema.DrugLegalStatus)
  }

  static readonly __mixins: Mixin[] = [DrugLegalStatusMixin, MedicalIntangibleMixin];
}
DrugLegalStatusMixin.appliesTo = schema.DrugLegalStatus
DrugLegalStatusMixin.Class = DrugLegalStatusImpl

export const fromPointer = createFactory<DrugLegalStatus>([MedicalIntangibleMixin, DrugLegalStatusMixin], { types: [schema.DrugLegalStatus] });
