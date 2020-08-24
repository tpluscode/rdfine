import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from 'rdf-js';
import { sh } from './lib/namespace';
import type { Initializer, ResourceNode } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '.';
import * as Rdfs from '@rdfine/rdfs';

export interface JSLibrary extends Rdfs.Resource, RdfResource {
  jsLibraryURL: string;
}

export function JSLibraryMixin<Base extends Constructor>(Resource: Base) {
  @namespace(sh)
  class JSLibraryClass extends Rdfs.ResourceMixin(Resource) implements JSLibrary {
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

  static readonly __mixins: Mixin[] = [JSLibraryMixin, Rdfs.ResourceMixin];
}
JSLibraryMixin.appliesTo = sh.JSLibrary
JSLibraryMixin.Class = JSLibraryImpl
