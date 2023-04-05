import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { prov } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Prov from '../index.js';
import { DerivationMixin } from './Derivation.js';

export interface Removal<D extends RDF.DatasetCore = RDF.DatasetCore> extends Prov.Derivation<D>, RdfResource<D> {
  dictionary: Prov.Dictionary<D> | undefined;
  removedKey: RDF.Literal | undefined;
}

export function RemovalMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Removal> & RdfResourceCore> & Base {
  @namespace(prov)
  class RemovalClass extends DerivationMixin(Resource) implements Partial<Removal> {
    @property.resource({ implicitTypes: [prov.Dictionary] })
    dictionary: Prov.Dictionary | undefined;
    @property()
    removedKey: RDF.Literal | undefined;
  }
  return RemovalClass
}

class RemovalImpl extends RemovalMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Removal>) {
    super(arg, init)
    this.types.add(prov.Removal)
  }

  static readonly __mixins: Mixin[] = [RemovalMixin, DerivationMixin];
}
RemovalMixin.appliesTo = prov.Removal
RemovalMixin.Class = RemovalImpl

export const fromPointer = createFactory<Removal>([DerivationMixin, RemovalMixin], { types: [prov.Removal] });
