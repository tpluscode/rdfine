import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface Validator<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
}

export function ValidatorMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Validator> & RdfResourceCore> & Base {
  @namespace(sh)
  class ValidatorClass extends RdfsResourceMixin(Resource) implements Partial<Validator> {
  }
  return ValidatorClass
}

class ValidatorImpl extends ValidatorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Validator>) {
    super(arg, init)
    this.types.add(sh.Validator)
  }

  static readonly __mixins: Mixin[] = [ValidatorMixin, RdfsResourceMixin];
}
ValidatorMixin.appliesTo = sh.Validator
ValidatorMixin.Class = ValidatorImpl

export const fromPointer = createFactory<Validator>([RdfsResourceMixin, ValidatorMixin], { types: [sh.Validator] });
