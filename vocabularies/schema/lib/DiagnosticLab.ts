import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalOrganizationMixin } from './MedicalOrganization.js';

export interface DiagnosticLab<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalOrganization<D>, rdfine.RdfResource<D> {
  availableTest: Schema.MedicalTest<D> | undefined;
}

export function DiagnosticLabMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<DiagnosticLab> & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class DiagnosticLabClass extends MedicalOrganizationMixin(Resource) implements Partial<DiagnosticLab> {
    @rdfine.property.resource()
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

export const fromPointer = createFactory<DiagnosticLab>([MedicalOrganizationMixin, DiagnosticLabMixin], { types: [schema.DiagnosticLab] });
