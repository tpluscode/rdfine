import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { prov } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '..';
import { DerivationMixin } from './Derivation';

export interface PrimarySource<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Derivation<D>, RdfResource<D> {
}

export function PrimarySourceMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<PrimarySource> & RdfResourceCore> & Base {
  @namespace(prov)
  class PrimarySourceClass extends DerivationMixin(Resource) implements Partial<PrimarySource> {
  }
  return PrimarySourceClass
}

class PrimarySourceImpl extends PrimarySourceMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<PrimarySource>) {
    super(arg, init)
    this.types.add(prov.PrimarySource)
  }

  static readonly __mixins: Mixin[] = [PrimarySourceMixin, DerivationMixin];
}
PrimarySourceMixin.appliesTo = prov.PrimarySource
PrimarySourceMixin.Class = PrimarySourceImpl

export const fromPointer = createFactory<PrimarySource>([DerivationMixin, PrimarySourceMixin], { types: [prov.PrimarySource] });
