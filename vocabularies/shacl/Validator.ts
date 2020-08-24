import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import * as Rdfs from '@rdfine/rdfs';

export interface Validator extends Rdfs.Resource, RdfResource {
}

export function ValidatorMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ValidatorClass extends Rdfs.ResourceMixin(Resource) implements Validator {
  }
  return ValidatorClass
}

class ValidatorImpl extends ValidatorMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Validator>) {
    super(arg, init)
    this.types.add(sh.Validator)
  }

  static readonly __mixins: Mixin[] = [ValidatorMixin, Rdfs.ResourceMixin];
}
ValidatorMixin.appliesTo = sh.Validator
ValidatorMixin.Class = ValidatorImpl
