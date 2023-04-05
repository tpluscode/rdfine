import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import { SPARQLExecutableMixin } from './SPARQLExecutable.js';

export interface SPARQLUpdateExecutable<D extends RDF.DatasetCore = RDF.DatasetCore> extends Sh.SPARQLExecutable<D>, RdfResource<D> {
  update: string | undefined;
}

export function SPARQLUpdateExecutableMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<SPARQLUpdateExecutable> & RdfResourceCore> & Base {
  @namespace(sh)
  class SPARQLUpdateExecutableClass extends SPARQLExecutableMixin(Resource) implements Partial<SPARQLUpdateExecutable> {
    @property.literal()
    update: string | undefined;
  }
  return SPARQLUpdateExecutableClass
}

class SPARQLUpdateExecutableImpl extends SPARQLUpdateExecutableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<SPARQLUpdateExecutable>) {
    super(arg, init)
    this.types.add(sh.SPARQLUpdateExecutable)
  }

  static readonly __mixins: Mixin[] = [SPARQLUpdateExecutableMixin, SPARQLExecutableMixin];
}
SPARQLUpdateExecutableMixin.appliesTo = sh.SPARQLUpdateExecutable
SPARQLUpdateExecutableMixin.Class = SPARQLUpdateExecutableImpl

export const fromPointer = createFactory<SPARQLUpdateExecutable>([SPARQLExecutableMixin, SPARQLUpdateExecutableMixin], { types: [sh.SPARQLUpdateExecutable] });
