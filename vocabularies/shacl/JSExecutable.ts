import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import RdfsResourceMixin from '@rdfine/rdfs/Resource';

export interface JSExecutable extends Rdfs.Resource, RdfResource {
  jsFunctionName: string;
}

export default function JSExecutableMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class JSExecutableClass extends RdfsResourceMixin(Resource) implements JSExecutable {
    @property.literal()
    jsFunctionName!: string;
  }
  return JSExecutableClass
}

class JSExecutableImpl extends JSExecutableMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JSExecutable>) {
    super(arg, init)
    this.types.add(sh.JSExecutable)
  }
}
JSExecutableMixin.shouldApply = (r: RdfResource) => r.types.has(sh.JSExecutable)
JSExecutableMixin.Class = JSExecutableImpl
