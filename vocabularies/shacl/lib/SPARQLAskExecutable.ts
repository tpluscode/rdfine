import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { SPARQLExecutableMixin } from './SPARQLExecutable.js';

export interface SPARQLAskExecutable<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.SPARQLExecutable<D>, rdfine.RdfResource<D> {
  ask: string | undefined;
}

export function SPARQLAskExecutableMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SPARQLAskExecutable & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class SPARQLAskExecutableClass extends SPARQLExecutableMixin(Resource) {
    @rdfine.property.literal()
    ask: string | undefined;
  }
  return SPARQLAskExecutableClass as any
}

class SPARQLAskExecutableImpl extends SPARQLAskExecutableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLAskExecutable>) {
    super(arg, init)
    this.types.add(sh.SPARQLAskExecutable)
  }

  static readonly __mixins: Mixin[] = [SPARQLAskExecutableMixin, SPARQLExecutableMixin];
}
SPARQLAskExecutableMixin.appliesTo = sh.SPARQLAskExecutable
SPARQLAskExecutableMixin.Class = SPARQLAskExecutableImpl

export const fromPointer = createFactory<SPARQLAskExecutable>([SPARQLExecutableMixin, SPARQLAskExecutableMixin], { types: [sh.SPARQLAskExecutable] });
