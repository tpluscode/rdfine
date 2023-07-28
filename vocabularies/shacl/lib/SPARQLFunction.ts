import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { FunctionMixin } from './Function.js';
import { SPARQLAskExecutableMixin } from './SPARQLAskExecutable.js';
import { SPARQLSelectExecutableMixin } from './SPARQLSelectExecutable.js';

export interface SPARQLFunction<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.Function<D>, Sh.SPARQLAskExecutable<D>, Sh.SPARQLSelectExecutable<D>, rdfine.RdfResource<D> {
}

export function SPARQLFunctionMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<SPARQLFunction & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class SPARQLFunctionClass extends SPARQLSelectExecutableMixin(SPARQLAskExecutableMixin(FunctionMixin(Resource))) {
  }
  return SPARQLFunctionClass as any
}

class SPARQLFunctionImpl extends SPARQLFunctionMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLFunction>) {
    super(arg, init)
    this.types.add(sh.SPARQLFunction)
  }

  static readonly __mixins: Mixin[] = [SPARQLFunctionMixin, FunctionMixin, SPARQLAskExecutableMixin, SPARQLSelectExecutableMixin];
}
SPARQLFunctionMixin.appliesTo = sh.SPARQLFunction
SPARQLFunctionMixin.Class = SPARQLFunctionImpl

export const fromPointer = createFactory<SPARQLFunction>([SPARQLSelectExecutableMixin, SPARQLAskExecutableMixin, FunctionMixin, SPARQLFunctionMixin], { types: [sh.SPARQLFunction] });
