import RdfResourceImpl, { Constructor, namespace, RdfResource } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface Validator<ID extends ResourceNode = ResourceNode> extends Rdfs.Resource<ID>, RdfResource<ID> {
}

export function ValidatorMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class ValidatorClass extends RdfsResourceMixin(Resource) implements Validator {
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
