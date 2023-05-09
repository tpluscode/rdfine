import RdfResourceImpl, * as rdfine from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { SPARQLExecutableMixin } from './SPARQLExecutable.js';

export interface SPARQLConstructExecutable<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.SPARQLExecutable<D>, rdfine.RdfResource<D> {
  construct: string | undefined;
}

export function SPARQLConstructExecutableMixin<Base extends rdfine.Constructor>(Resource: Base): rdfine.Constructor<Partial<SPARQLConstructExecutable> & RdfResourceCore> & Base {
  @rdfine.namespace(sh)
  class SPARQLConstructExecutableClass extends SPARQLExecutableMixin(Resource) implements Partial<SPARQLConstructExecutable> {
    @rdfine.property.literal()
    construct: string | undefined;
  }
  return SPARQLConstructExecutableClass
}

class SPARQLConstructExecutableImpl extends SPARQLConstructExecutableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLConstructExecutable>) {
    super(arg, init)
    this.types.add(sh.SPARQLConstructExecutable)
  }

  static readonly __mixins: Mixin[] = [SPARQLConstructExecutableMixin, SPARQLExecutableMixin];
}
SPARQLConstructExecutableMixin.appliesTo = sh.SPARQLConstructExecutable
SPARQLConstructExecutableMixin.Class = SPARQLConstructExecutableImpl

export const fromPointer = createFactory<SPARQLConstructExecutable>([SPARQLExecutableMixin, SPARQLConstructExecutableMixin], { types: [sh.SPARQLConstructExecutable] });
