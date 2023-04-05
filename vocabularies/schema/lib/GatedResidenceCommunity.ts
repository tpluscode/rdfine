import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { schema } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '../index.js';
import { ResidenceMixin } from './Residence.js';

export interface GatedResidenceCommunity<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.Residence<D>, RdfResource<D> {
}

export function GatedResidenceCommunityMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<GatedResidenceCommunity> & RdfResourceCore> & Base {
  @namespace(schema)
  class GatedResidenceCommunityClass extends ResidenceMixin(Resource) implements Partial<GatedResidenceCommunity> {
  }
  return GatedResidenceCommunityClass
}

class GatedResidenceCommunityImpl extends GatedResidenceCommunityMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<GatedResidenceCommunity>) {
    super(arg, init)
    this.types.add(schema.GatedResidenceCommunity)
  }

  static readonly __mixins: Mixin[] = [GatedResidenceCommunityMixin, ResidenceMixin];
}
GatedResidenceCommunityMixin.appliesTo = schema.GatedResidenceCommunity
GatedResidenceCommunityMixin.Class = GatedResidenceCommunityImpl

export const fromPointer = createFactory<GatedResidenceCommunity>([ResidenceMixin, GatedResidenceCommunityMixin], { types: [schema.GatedResidenceCommunity] });
