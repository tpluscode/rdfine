import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { schema } from './namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Schema from '..';
import { CreativeWorkMixin } from './CreativeWork';

export interface Claim<D extends RDF.DatasetCore = RDF.DatasetCore> extends Schema.CreativeWork<D>, RdfResource<D> {
  appearance: Schema.CreativeWork<D> | undefined;
  firstAppearance: Schema.CreativeWork<D> | undefined;
}

export function ClaimMixin<Base extends Constructor>(Resource: Base) {
  @namespace(schema)
  class ClaimClass extends CreativeWorkMixin(Resource) implements Claim {
    @property.resource()
    appearance: Schema.CreativeWork | undefined;
    @property.resource()
    firstAppearance: Schema.CreativeWork | undefined;
  }
  return ClaimClass
}

class ClaimImpl extends ClaimMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Claim>) {
    super(arg, init)
    this.types.add(schema.Claim)
  }

  static readonly __mixins: Mixin[] = [ClaimMixin, CreativeWorkMixin];
}
ClaimMixin.appliesTo = schema.Claim
ClaimMixin.Class = ClaimImpl
