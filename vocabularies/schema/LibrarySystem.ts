import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '.';
import { OrganizationMixin } from './Organization';

export interface LibrarySystem<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Organization<D>, RdfResource<D> {
}

export function LibrarySystemMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class LibrarySystemClass extends OrganizationMixin(Resource) implements LibrarySystem {
  }
  return LibrarySystemClass
}

class LibrarySystemImpl extends LibrarySystemMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<LibrarySystem>) {
    super(arg, init)
    this.types.add(schema.LibrarySystem)
  }

  static readonly __mixins: Mixin[] = [LibrarySystemMixin, OrganizationMixin];
}
LibrarySystemMixin.appliesTo = schema.LibrarySystem
LibrarySystemMixin.Class = LibrarySystemImpl
