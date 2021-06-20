import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { LocalBusinessMixin } from './LocalBusiness';

export interface ArchiveOrganization<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.LocalBusiness<D>, RdfResource<D> {
  archiveHeld: Schema.ArchiveComponent<D> | undefined;
}

export function ArchiveOrganizationMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<ArchiveOrganization> & RdfResourceCore> & Base {
  @namespace(schema)
  class ArchiveOrganizationClass extends LocalBusinessMixin(Resource) implements Partial<ArchiveOrganization> {
    @property.resource()
    archiveHeld: Schema.ArchiveComponent | undefined;
  }
  return ArchiveOrganizationClass
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
