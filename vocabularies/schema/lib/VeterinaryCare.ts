import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { MedicalOrganizationMixin } from './MedicalOrganization';

export interface VeterinaryCare<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.MedicalOrganization<D>, RdfResource<D> {
}

export function VeterinaryCareMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<VeterinaryCare> & RdfResourceCore> & Base {
  @namespace(schema)
  class VeterinaryCareClass extends MedicalOrganizationMixin(Resource) implements Partial<VeterinaryCare> {
  }
  return VeterinaryCareClass
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
