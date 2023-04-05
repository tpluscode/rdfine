import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { EntityMixin } from './Entity.js';

export interface Bundle<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Entity<D>, RdfResource<D> {
}

export function BundleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Bundle> & RdfResourceCore> & Base {
  @namespace(prov)
  class BundleClass extends EntityMixin(Resource) implements Partial<Bundle> {
  }
  return BundleClass
}

class BundleImpl extends BundleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Bundle>) {
    super(arg, init)
    this.types.add(prov.Bundle)
  }

  static readonly __mixins: Mixin[] = [BundleMixin, EntityMixin];
}
BundleMixin.appliesTo = prov.Bundle
BundleMixin.Class = BundleImpl

export const fromPointer = createFactory<Bundle>([EntityMixin, BundleMixin], { types: [prov.Bundle] });
