import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type * as Sh from '.';
import type * as Rdfs from '@rdfine/rdfs';
import RdfsResourceMixin from '@rdfine/rdfs/Resource';

export interface JSLibrary extends Rdfs.Resource, RdfResource {
  jsLibraryURL: string;
}

export default function JSLibraryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class JSLibraryClass extends RdfsResourceMixin(Resource) implements JSLibrary {
    @property.literal()
    jsLibraryURL!: string;
  }
  return JSLibraryClass
}

class JSLibraryImpl extends JSLibraryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JSLibrary>) {
    super(arg, init)
    this.types.add(sh.JSLibrary)
  }
}
JSLibraryMixin.shouldApply = (r: RdfResource) => r.types.has(sh.JSLibrary)
JSLibraryMixin.Class = JSLibraryImpl
