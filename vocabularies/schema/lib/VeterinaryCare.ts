import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { MedicalOrganizationMixin } from './MedicalOrganization.js';

export interface VeterinaryCare<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalOrganization<D>, rdfine.RdfResource<D> {
}

export function VeterinaryCareMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<VeterinaryCare & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class VeterinaryCareClass extends MedicalOrganizationMixin(Resource) {
  }
  return VeterinaryCareClass as any
}

class VeterinaryCareImpl extends VeterinaryCareMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<VeterinaryCare>) {
    super(arg, init)
    this.types.add(schema.VeterinaryCare)
  }

  static readonly __mixins: Mixin[] = [VeterinaryCareMixin, MedicalOrganizationMixin];
}
VeterinaryCareMixin.appliesTo = schema.VeterinaryCare
VeterinaryCareMixin.Class = VeterinaryCareImpl

export const fromPointer = createFactory<VeterinaryCare>([MedicalOrganizationMixin, VeterinaryCareMixin], { types: [schema.VeterinaryCare] });
