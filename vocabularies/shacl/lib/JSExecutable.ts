import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './namespace';
import type { Initializer, ResourceNode, SiblingNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '..';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface JSExecutable<ID extends ResourceNode = ResourceNode> extends Rdfs.Resource<ID>, RdfResource<ID> {
  jsFunctionName: string | undefined;
}

export function JSExecutableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class JSExecutableClass extends RdfsResourceMixin(Resource) implements JSExecutable {
    @property.literal()
    jsFunctionName: string | undefined;
  }
  return JSExecutableClass
}

class JSExecutableImpl extends JSExecutableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JSExecutable>) {
    super(arg, init)
    this.types.add(sh.JSExecutable)
  }

  static readonly __mixins: Mixin[] = [JSExecutableMixin, RdfsResourceMixin];
}
JSExecutableMixin.appliesTo = sh.JSExecutable
JSExecutableMixin.Class = JSExecutableImpl
