import RdfResourceImpl, { Constructor, namespace, RdfResource, property } from '@tpluscode/rdfine';
import { createFactory } from '@tpluscode/rdfine/factory';
import * as $rdf from '@rdf-esm/data-model';
import type * as RDF from '@rdfjs/types';
import { rico } from './namespace';
import type { Initializer, ResourceNode, RdfResourceCore } from '@tpluscode/rdfine/RdfResource';
import type { Mixin } from '@tpluscode/rdfine/lib/ResourceFactory';
import type * as Rico from '..';
import { NameMixin } from './Name';

export interface Title<D extends RDF.DatasetCore = RDF.DatasetCore> extends Rico.Name<D>, RdfResource<D> {
  isOrWasTitleOf: Rico.Instantiation<D> | Rico.RecordResource<D> | Rico.Rule<D> | undefined;
}

export function TitleMixin<Base extends Constructor>(Resource: Base): Constructor<Partial<Title> & RdfResourceCore> & Base {
  @namespace(rico)
  class TitleClass extends NameMixin(Resource) implements Partial<Title> {
    @property.resource()
    isOrWasTitleOf: Rico.Instantiation | Rico.RecordResource | Rico.Rule | undefined;
  }
  return TitleClass
}

class TitleImpl extends TitleMixin(RdfResourceImpl) {
  constructor(arg: ResourceNode, init?: Initializer<Title>) {
    super(arg, init)
    this.types.add(rico.Title)
  }

  static readonly __mixins: Mixin[] = [TitleMixin, NameMixin];
}
TitleMixin.appliesTo = rico.Title
TitleMixin.Class = TitleImpl

export const fromPointer = createFactory<Title>([NameMixin, TitleMixin], { types: [rico.Title] });
