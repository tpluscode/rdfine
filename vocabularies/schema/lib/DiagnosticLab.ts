import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalOrganizationMixin } from './MedicalOrganization';

export interface DiagnosticLab<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalOrganization<D>, RdfResource<D> {
  availableTest: Schema.MedicalTest<D> | undefined;
}

export function DiagnosticLabMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class DiagnosticLabClass extends MedicalOrganizationMixin(Resource) implements DiagnosticLab {
    @property.resource()
    availableTest: Schema.MedicalTest | undefined;
  }
  return DiagnosticLabClass
}

class DiagnosticLabImpl extends DiagnosticLabMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<DiagnosticLab>) {
    super(arg, init)
    this.types.add(schema.DiagnosticLab)
  }

  static readonly __mixins: Mixin[] = [DiagnosticLabMixin, MedicalOrganizationMixin];
}
DiagnosticLabMixin.appliesTo = schema.DiagnosticLab
DiagnosticLabMixin.Class = DiagnosticLabImpl
