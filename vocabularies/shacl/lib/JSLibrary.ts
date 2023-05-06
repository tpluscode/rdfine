import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import $rdf from '@rdfjs/data-model';
import type * as RDF from '@rdfjs/types';
import { sh } from './namespace.js';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Sh from '../index.js';
import type * as Rdfs from '@rdfine/rdfs';
import { ResourceMixin as RdfsResourceMixin } from '@rdfine/rdfs/lib/Resource';

export interface JSLibrary<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rdfs.Resource<D>, RdfResource<D> {
  jsLibraryURL: string | undefined;
}

export function JSLibraryMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<JSLibrary> & RdfResourceCore> & Base {
  @namespace(sh)
  class JSLibraryClass extends RdfsResourceMixin(Resource) implements Partial<JSLibrary> {
    @property.literal()
    jsLibraryURL: string | undefined;
  }
  return JSLibraryClass
}

class JSLibraryImpl extends JSLibraryMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<JSLibrary>) {
    super(arg, init)
    this.types.add(sh.JSLibrary)
  }

  static readonly __mixins: Mixin[] = [JSLibraryMixin, RdfsResourceMixin];
}
JSLibraryMixin.appliesTo = sh.JSLibrary
JSLibraryMixin.Class = JSLibraryImpl

export const fromPointer = createFactory<JSLibrary>([RdfsResourceMixin, JSLibraryMixin], { types: [sh.JSLibrary] });
