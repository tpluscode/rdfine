import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { LocalBusinessMixin } from './LocalBusiness.js';

export interface ArchiveOrganization<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, rdfine.RdfResource<D> {
  archiveHeld: Schema.ArchiveComponent<D> | undefined;
}

export function ArchiveOrganizationMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<ArchiveOrganization & RdfResourceCore> & Base {
  @rdfine.namespace(schema)
  class ArchiveOrganizationClass extends LocalBusinessMixin(Resource) {
    @rdfine.property.resource()
    archiveHeld: Schema.ArchiveComponent | undefined;
  }
  return ArchiveOrganizationClass as any
}

class ArchiveOrganizationImpl extends ArchiveOrganizationMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<ArchiveOrganization>) {
    super(arg, init)
    this.types.add(schema.ArchiveOrganization)
  }

  static readonly __mixins: Mixin[] = [ArchiveOrganizationMixin, LocalBusinessMixin];
}
ArchiveOrganizationMixin.appliesTo = schema.ArchiveOrganization
ArchiveOrganizationMixin.Class = ArchiveOrganizationImpl

export const fromPointer = createFactory<ArchiveOrganization>([LocalBusinessMixin, ArchiveOrganizationMixin], { types: [schema.ArchiveOrganization] });
